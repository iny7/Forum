module Comments
  class LikesController < ApplicationController

    def like
      comments = Comment.find(params[:comment_id])
      like.user = current_user
      like = comments.likes.create
      if like.save
        render :create_ok
      else
        render :create_fail
      end
    end

    def unlike
    end

  end
end