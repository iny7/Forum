module Users
  class RelationshipsController < ApplicationController

    # 关注某人
    def create
      u = params[:user_id]
      current_user.follow!(u)
    end

    # 取关某人
    def destroy
      u = params[:user_id]
      current_user.unfollow!(u)
    end

    # 正在关注
    def following
      u = params[:user_id]
      render_json({
        following: u.followed_users
      })
    end

    # 粉丝
    def followers
      u = params[:user_id]
      render_json({
        following: u.followers
      })
    end

  end
end