module Users
  class RelationshipsController < ApplicationController

    # 关注某人
    def create
      u = User.find(params[:id])
      if u && current_user.follow(u)
        render json: {
          my_id: current_user.id,
          user_id: u.id
        }
      else
        render json: 'failed'
      end
    end

    # 取关某人
    def destroy
      u = User.find(params[:id])
      if u && current_user.unfollow(u)
        render json: {
          my_id: current_user.id,
          user_id: u.id
        }
      else
        render json: 'failed'
      end
    end

  end
end