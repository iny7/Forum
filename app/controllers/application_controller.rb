class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session
  # 422 unprocessable entity
  skip_before_action :verify_authenticity_token

  acts_as_token_authentication_handler_for User#, unless: lambda { |controller| controller.request.format.html? }

  # before_action :authenticate_user!

  def index
    layout_only
  end

  def log(args)
    Rails.logger.info args
  end

  private

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
