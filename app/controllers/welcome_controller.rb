class WelcomeController < ApplicationController

  before_action :login_required, only: [:index]
  # wechat_api
  def index
    render 'users/index'
    # @projects = current_user.projects
    # redirect_to posts_url
  end
end
