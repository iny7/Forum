class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
    def render_json(data)
      respond_to do |wants|
        wants.json do
          render json: data
        end
      end
    end

    def current_user
      @current_user ||= cookies[:user_id] && User.find_by_id(cookies[:user_id])
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
