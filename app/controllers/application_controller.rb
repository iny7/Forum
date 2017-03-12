class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session
  # 422 unprocessable entity
  skip_before_action :verify_authenticity_token

  acts_as_token_authentication_handler_for User#, unless: lambda { |controller| controller.request.format.html? }

  before_action :authenticate_user!, expect: [path: '/signin']
  # before_action :login_required
  # skip_before_action :login_required, only: [:index]
  # helper_method :current_user

  def index
    layout_only
  end

  private

  # def authenticate_user!
  #   if user_signed_in?
  #     super
  #   else
  #     respond_to do |wants|
  #       wants.html do
  #         layout_only
  #       end
  #       wants.json do
  #         render json: 'errors', status: 401
  #       end
  #     end
  #     # redirect_to login_path, :notice => 'if you want to add a notice'
  #     ## if you want render 404 page
  #     ## render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
  #   end
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

  def current_user
    # @current_user ||= cookies[:user_id] && User.find_by_id(cookies[:user_id])
    # cookies[:user_id] && User.find_by_id(cookies[:user_id])
    @current_user ||= authenticate_token
  end

  def login_required
    return true if authenticate_token
    access_denied
  end

  def access_denied
    # render json: { errors: 'Access Denied' }, status: 401
    respond_to do |wants|
      wants.html do
        session[:return_to] = request.fullpath
        redirect_to '/'
      end
      wants.json { render :json => "Access denied.", :status => '403'}
    end
  end

  def authenticate_token
    authenticate_with_http_token do |token, options|
      Rails.logger.info ')' * 10
      Rails.logger.info token
      User.find_by(auth_token: token)
    end
  end

end
