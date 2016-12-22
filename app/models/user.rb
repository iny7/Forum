class User < ActiveRecord::Base

  has_secure_password

  has_one :profile, class_name: 'Users::Profile'

  # has_many :projects, :dependent => :destroy
  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts
  has_many :likes, as: :likeable
  # before_create { generate_token(:auth_token) }

  after_create :create_profile

  validates :name, presence: true

  # def generate_token(column)
  #   begin
  #     self[column] = SecureRandom.urlsafe_base64
  #   end while User.exists?(column => self[column])
  # end

  def generate_profile(nickname)
  end

end
