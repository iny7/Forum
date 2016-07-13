class UsersController < ApplicationController
  
  def create
    user = User.new(user_params)
    if user.save
      redirect_to :root
    else
      render 'signup'
    end
  end

  def signup
    @user = User.new
  end

  def login
    @user = User.new
  end

  def create_login_session
    user = User.find_by_name(params[:user][:name])
    if user && user.authenticate(params[:user][:password])
      if params[:remember_me]
        cookies.permanent[:auth_token] = user.auth_token
      else
        cookies[:auth_token] = user.auth_token
      end
      render plain: cookies[:auth_token]
      # redirect_to :root
    else
      redirect_to :login
    end
  end

  def logout
    cookies.delete(:auth_token)
    redirect_to :root
  end

  private 
    def user_params
      params.require(:user).permit!
    end
end
