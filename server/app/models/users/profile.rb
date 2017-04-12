module Users
  class Profile < ActiveRecord::Base
    belongs_to :user
    validates_presence_of :user

    has_attached_file :avatar,
      styles: {
          medium: ["300x300>", :png],
          thumb: ["100x100>", :png]
      },
      default_url: "/images/avatar.png"

    validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  end
end
