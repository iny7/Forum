module Users
  class ProfilesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def update
      puts current_user
      profile = current_user.profile
      avatar = process_image_data(:avatar)
      profile.avatar = avatar if avatar

      if profile.update_attributes(profile_params)
        render_json({ status_code: 200 })
      else
        render_json({ status_code: 400 })
      end
    end
    private
    def profile_params
      params[:profile].permit(:nickname, :avatar, :grade, :sex)
    end

  end
end