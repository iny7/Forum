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

  end
end