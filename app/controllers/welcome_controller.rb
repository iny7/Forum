class WelcomeController < ApplicationController

  # wechat_api
  def index
    redirect_to '/signin'
  end
end
