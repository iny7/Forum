class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :login_required, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { token: @user.auth_token }
    else
      render json: { erros: @user.errors }
    end
  end

  private
  def user_params
    params.fetch(:user, {}).permit(
      :name, :email, :password, :password_confirmation,
      :avatar, :permalink, :description, :code, :company_name, :promo_code,
      profile_attributes: [
        :nickname, :tags, :company, :job_title,
        :sites, :wechat, :mobile, :birthday, :location
      ]
    )
  end
end
