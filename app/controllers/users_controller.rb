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
      session[:user_id] = user.id
      redirect_to :root
    else
      redirect_to :login
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to :root
  end

  private 
    def user_params
      params.require(:user).permit!
    end
end
