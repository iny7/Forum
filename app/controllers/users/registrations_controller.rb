module Users
  class RegistrationsController < Devise::RegistrationsController

    respond_to :html, :json

    skip_before_action :verify_authenticity_token

  end
end