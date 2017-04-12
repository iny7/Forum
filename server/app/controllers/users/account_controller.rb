module Users
  class AccountController < ApplicationController
    def show
      u = current_user
      Rails.logger.info '*' * 10
      Rails.logger.info u
      render_json({
        user: {
          name: u.name,
          followers_count: u.followers.count,
          following_count: u.followed_users.count,
          posts_count: u.posts.count
        }
      })
    end
  end
end
