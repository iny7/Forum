module Users
  class ProfilesController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def show
      profile = current_user.profile
      sex = profile.sex
      if sex.nil?
        sexText = 'none'
      elsif sex == 0
        sexText = 'boy'
      else
        sexText = 'girl'
      end

      render json: {
        nickname: profile.nickname,
        sex: sexText,
        grade: profile.grade,
        avatar: profile.avatar,
        desc: profile.desc
      }
    end

    def update
      profile = current_user.profile
      # avatar = process_image_data(:avatar)
      # profile.avatar = avatar if avatar

      if profile.update_attributes(profile_params)
        render_json({ status_code: 200 })
      else
        render_json({ status_code: 400 })
      end
    end
    private
    def profile_params
      params[:profile].permit(:nickname, :avatar, :grade, :sex, :desc)
    end

  end
end