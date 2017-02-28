class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    render_json({
      status_code: @user.save ? 200 : 403,
      user_id: @user.id
    })
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
