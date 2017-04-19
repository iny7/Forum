class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :login_required, only: [:create]

  def show
    u = User.find_by_id(params[:user_id])
    render json: {
      id: u.id,
      nickname: u.profile.try(:nickname),
      followers_count: u.followers.count,
      following_count: u.followed_users.count,
    }
  end

  def posts
    u = User.find(params[:user_id])
    render json: u.posts
  end

  def comments
    # TODO user comment :through
    u = User.find(params[:user_id])
    render json: u.comments
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
