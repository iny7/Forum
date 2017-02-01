class WelcomeController < ApplicationController

  # before_action :login_required, only: [:index]
  # wechat_api
  def index
    if logged_in?# && false
      render text: nil, layout: 'application'
    else
      layout_only
    end
    # respond_to do |wants|
    #   wants.json do
    #     render json: {}
    #   end
    # end
    # @projects = current_user.projects
    # redirect_to posts_url
  end

  def signin
    @user = User.new
    # respond_to do |wants|
    #   wants.json do
    #     render json: {

    #     }
    #   end
    # end
  end

  def signup
    @user = User.new
    # respond_to do |wants|
    #   wants.json do
    #     render json: {

    #     }
    #   end
    # end
  end
end
