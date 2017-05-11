module Users
  class SessionsController < Devise::SessionsController
    respond_to :html, :json

    skip_before_action :require_no_authentication
    skip_before_action :verify_authenticity_token

    def users_url
      '/'
    end

    # def create
    #   reset_session
    #   super
    # end

  end
end