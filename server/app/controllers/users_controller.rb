class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :login_required, only: [:create]

  def show
    u = User.find_by_id(params[:id])
    log params[:id]
    log u.inspect
    render json: {
      id: u.id,
      nickname: u.profile.try(:nickname),
      desc: u.profile.try(:desc),
      avatar: u.profile.try(:avatar).try(:url),
      followers_count: u.followers.count,
      following_count: u.followed_users.count,
      posts_count: u.posts.count,
      is_followed: current_user.following?(u)
    }
  end

  def posts
    u = User.find(params[:user_id])
    user_id = u.id
    result = u.posts.each_with_object([]) do |p, mem|
      mem << {
        id:             p.id,
        title:          p.title,
        category:       p.category,
        content:        p.content,
        comments:       p.comments,
        created_at:     p.created_at,
        liked:          p.is_liked(user_id),
        likes_count:    p.likes.count,
        author: {
          id:      p.user_id,
          name:    p.user.profile.nickname,
          avatar:  p.user.profile.try(:avatar)
        }
      }
    end

    render json: result
  end

  # 正在关注
  def following
    u = User.find(params[:user_id])
    render json: {
      id: u.id,
      name: u.profile.nickname,
      following: u.followed_users.map(&:lite_json)
    }
  end

  # 粉丝
  def followers
    u = User.find(params[:user_id])
    render json: {
      id: u.id,
      name: u.profile.nickname,
      fans: u.followers.map(&:lite_json)
    }
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
