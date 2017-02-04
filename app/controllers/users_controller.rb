class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # @user = User.new(user_params)
    # if @user.save
    #   cookies[:user_id] = @user.id
    #   redirect_to :root
    # else
    #   render 'welcome/signup'
    # end
    render_json({ result: 'hehe' })
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
