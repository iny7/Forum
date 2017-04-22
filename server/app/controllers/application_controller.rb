class ApplicationController < ActionController::Base
  # before_action :skip_session
  protect_from_forgery with: :null_session
  # 422 unprocessable entity
  skip_before_action :verify_authenticity_token

  # before_filter :authenticate_user!, unless: lambda { |controller| controller.request.format == :json }
  before_filter :layout_only, :if => lambda { |controller| controller.request.format == :html }

  acts_as_token_authentication_handler_for User#, unless: lambda { |controller| controller.request.format.html? }

  def index
    layout_only
  end

  def log(args)
    Rails.logger.info '*' * 20
    Rails.logger.info args
    Rails.logger.info '*' * 20
  end

  private

  # Overwriting the sign_out redirect path method by devise
  def after_sign_out_path_for(resource_or_scope)
    render text: nil, layout: 'application'
    return
  end

  # def skip_session
  #   request.session_options[:skip] = true
  # end

  def layout_only
    render text: nil, layout: true
  end

  def process_image_data(key)
    image_data = params[key]
    return nil unless image_data.present?

    r = /^data:image\/(.*?);base64,(.*?)$/.match(image_data)
    return nil unless r

    ext     = r[1]
    data    = r[2]
    decoded = Base64.decode64(data)

    # FIXME: hardcode for svg
    ext = 'svg' if ext.include?('svg')

    raw = Asset::FilelessIO.new(decoded)
    raw.original_filename = "#{key}_#{Time.now.to_i}.#{ext}"
    raw.content_type = "image/#{ext}"
    raw
  end

  def render_json(data)
    respond_to do |wants|
      wants.html do
        layout_only
      end
      wants.json do
        render json: data
      end
    end
  end

end
