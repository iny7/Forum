module Application
	class PostsController < ApplicationController
			layout 'application'

			# http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]

			def new
				@post = Post.new
	  	end

			def index
				@posts = Post.all
			end

			def edit
				@post = Post.find(params[:id])
			end

			def update
				@post = Post.find(params[:id])
				if @post.update(post_params)
					redirect_to @post
				else
					render 'edit'
				end
			end

			def destroy
				@post = Post.find(params[:id])
				@post.destroy
				redirect_to posst_path
			end

			def show
				@post = Post.find(params[:id])
			end

	  	def create
	  		@post = Post.new(post_params)
	  		if @post.save
					redirect_to @post
				else
					render 'new'
				end
	  	end

			private
			  def post_params
			    params.require(:post).permit(:title, :text)
			  end
	end
end
