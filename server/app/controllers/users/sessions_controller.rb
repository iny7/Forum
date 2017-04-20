module Users
  class SessionsController < Devise::SessionsController
    respond_to :html, :json
    skip_before_action :verify_authenticity_token

  end
end