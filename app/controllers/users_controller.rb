class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # @user = User.new(user_params)
    # if @user.save
    #   cookies[:user_id] = @user.id
    #   redirect_to :root
    # else
    #   render 'welcome/signup'
    # end
    render_json({ result: 'hehe' })
  end

  def create_login_session
    user = User.find_by_name(params[:user][:name])
    if user
      if user.authenticate(params[:user][:password])
        cookies.permanent[:user_id] = user.id
        render_json({ status_code: 200 })
      else
        cookies.permanent[:user_id] = user.id
        render_json({ status_code: 403 })
      end
    else
      render_json({ status_code: 404 })
    end

    # if user && user.authenticate(params[:user][:password])
      # if params[:remember_me]
      #   cookies.permanent[:user_id] = user.id
      # else
      #   cookies[:user_id] = user.id
      # end
      # flash.notice = '登录成功!'
      # redirect_to posts_path
    # else
    #   flash.notice = '登录失败!'
    #   redirect_to :signin
    # end
  end

  def logout
    cookies.delete(:auth_token)
    cookies.delete(:user_id)
    # redirect_to :root
    render_json({status_code: 200})
  end

  private
    def user_params
      params.fetch(:user, {}).permit(
        :name, :email, :password, :password_confirmation,
        :avatar, :permalink, :description, :code, :company_name, :promo_code,
        profile_attributes: [
          :nickname, :tags, :company, :job_title,
          :sites, :wechat, :mobile, :birthday, :location
        ]
      )
    end
end
