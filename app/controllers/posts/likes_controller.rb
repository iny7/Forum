module Posts
  class LikesController < ApplicationController

    def like
      post = Post.find(params[:post_id])
      like.user = current_user
      like = post.likes.create
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