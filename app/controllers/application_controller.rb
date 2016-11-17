class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
    def current_user
      @current_user ||= cookies[:auth_token] && User.find_by_auth_token(cookies[:auth_token])
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
