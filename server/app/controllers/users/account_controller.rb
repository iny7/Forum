module Users
  class AccountController < ApplicationController
    def show
      u = current_user
      profile = u.profile
      render json: {
        nickname: profile.try(:nickname),
        desc: profile.try(:desc),
        avatar: profile.try(:avatar).try(:url),
        followers_count: u.followers.count,
        following_count: u.followed_users.count,
        posts_count: u.posts.count
      }
    end
  end
end
