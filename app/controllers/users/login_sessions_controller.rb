module Users
  class LoginSessionsController < ApplicationController
    skip_before_action :login_required, only: [:create]
    def create
      user = User.find_by_name(params[:user][:name])
      if user
        if user.authenticate(params[:user][:password])
          cookies.permanent[:user_id] = user.id
          token = generate_auth_token
          user.update_column(:auth_token, token)
          render json: { token: token }
        else
          cookies.permanent[:user_id] = user.id
          render json: { error: '密码错误' }, status: 403
        end
      else
        render json: { error: '找不到用户' }, status: 404
      end
    end

    def logout
      current_user.update_attribute(:auth_token, nil)
      # cookies.delete(:auth_token)
      # cookies.delete(:user_id)
      # redirect_to :root
      render_json({status_code: 200})
    end

    private
    def generate_auth_token
      SecureRandom.uuid.gsub(/\-/,'')
    end

  end
end