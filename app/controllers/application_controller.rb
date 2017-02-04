class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want  to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    layout_only
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

  def current_user
    # @current_user ||= cookies[:user_id] && User.find_by_id(cookies[:user_id])
    cookies[:user_id] && User.find_by_id(cookies[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def login_required
    logged_in? || access_denied
  end

  def access_denied
    respond_to do |wants|
      wants.html do
        session[:return_to] = request.fullpath
        redirect_to signin_url
      end
      wants.json { render :json => "Access denied.", :status => '403'}
    end
  end

  helper_method :current_user

end
