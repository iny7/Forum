module Posts
  class CommentsController < ApplicationController

    def index
      post = Post.find( params[:post_id] )
      res = post.comments#.desc(:created_at).collect { |comment| build_json(comment) }
      render json: res
    end

    def create
      post = Post.find( params[:post_id] )
      comment = post.comments.build(comment_params)

      if comment.save
        comments = post.comments.order(created_at: :desc)
        render :create_ok
      else
        render :create_fail
      end
    end

    def destroy
      post = Post.find(params[:post_id])
      comment = post.comments.find(params[:id])
      comment.destroy
      render :delete_success
    end

    private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end

    def build_json(comment)
      {
        content: comment.content,
        name: comment.name,
        'created_at' => format_time(comment.created_at)
      }
    end

  end
end
