class User < ActiveRecord::Base
  acts_as_token_authenticatable

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # has_secure_password

  has_one :profile, class_name: 'Users::Profile'

  has_many :posts, dependent: :destroy
  # has_many :comments, dependent: :destroy#, class_name: 'Posts::Comment'
  has_many :likes, as: :likeable

  # before_create :generate_auth_token
  after_create :create_profile

  # validates :name, presence: true

  def generate_profile(nickname)
  end

end
