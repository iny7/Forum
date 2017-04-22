class PostsController < ApplicationController
	layout 'application'

	def index
		category = params[:category].present? ? params[:category] : 'newest'
		posts = Post.where(category: category)
		user_id = current_user.try(:id)
		result = posts.each_with_object([]) do |p, mem|
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

		render json: result#{ posts: result }
	end

	def show
		p = Post.find_by_id(params[:id])
		user_id = current_user.try(:id)
		result = {
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

		render json: result
	end

	def update
		post = Post.find(params[:id])
		if @post.update(post_params)
			render json: 'success'
		else
			render json: 'failed'
		end
	end

	def destroy
		post = Post.find(params[:id])
		post.destroy
		render json: post
	end

	def create
		@post = Post.new(post_params)
		@post.user_id = current_user.id
		if @post.save
			render json: @post
		else
			render json: @post.errors
		end
	end

	private
  def post_params
    params.require(:post).permit(:title, :category, :content)
  end
end
