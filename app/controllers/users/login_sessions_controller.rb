module Users
  class LoginSessionsController < ApplicationController
    # 422 unprocessable entity
    skip_before_action :verify_authenticity_token

    def create
      user = User.find_by_name(params[:user][:name])
      if user
        if user.authenticate(params[:user][:password])
          cookies.permanent[:user_id] = user.id
          render_json({ status_code: 200 })
        else
          cookies.permanent[:user_id] = user.id
          render_json({ status_code: 403 })
        end
      else
        render_json({ status_code: 404 })
      end
    end

    def logout
      cookies.delete(:auth_token)
      cookies.delete(:user_id)
      # redirect_to :root
      render_json({status_code: 200})
    end

  end
end