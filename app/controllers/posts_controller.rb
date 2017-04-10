class PostsController < ApplicationController
	layout 'application'

	# http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]

	def index
		category = params[:category].present? ? params[:category] : 'newest'
		posts = Post.where(category: category)
		user_id = current_user.try(:id)
		render_json({
			posts: posts.as_json(user_id: user_id)
		})
	end

	def update
		post = Post.find(params[:id])
		if @post.update(post_params)
			redirect_to @post
		else
			render 'edit'
		end
	end

	def destroy
		post = Post.find(params[:id])
		post.destroy
		render json: post
	end

	def show
		post = Post.find_by_id(params[:id])
		user_id = current_user.try(:id)
		render_json({
			post: post.as_json(user_id: user_id)
		})
	end

	def create
		@post = Post.new(post_params)
		@post.user_id = current_user.id
		if @post.save
			render_json({
				status_code: 200,
				post_id: @post.id
			})
		else
			render_json({
				errors: @post.errors
			})
		end
	end

	private
  def post_params
    params.require(:post).permit(:title, :category, :content)
  end
end
