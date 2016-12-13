class WelcomeController < ApplicationController

  before_action :login_required, only: [:index]
  # wechat_api
  def index
    # @projects = current_user.projects
    redirect_to articles_url
  end
end
