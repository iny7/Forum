class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :login_required, only: [:create]

  def show
    u = User.find_by_id(params[:id])
    render_json({
      user: {
        id: u.id,
        name: u.name,
        followers_count: u.followers.count,
        following_count: u.followed_users.count,
      }
    })
  end

  def posts
    u = User.find(params[:id])
    render_json( u.posts )
  end

  def comments
    # TODO user comment :through
    u = User.find(params[:id])
    render_json({ comments: u.comments })
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
