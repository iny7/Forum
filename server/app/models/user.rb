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
  # has_many :likes, dependent: :destroy#, as: :likeable

  # 关注的人
  has_many :relationships, foreign_key: "follower_id", dependent: :destroy
  has_many :followed_users, through: :relationships, source: :followed
  # 粉丝
  has_many :reverse_relationships, foreign_key: "followed_id", class_name: "Relationship", dependent: :destroy
  has_many :followers, through: :reverse_relationships, dependent: :destroy#, source: :follower

  # before_create :generate_auth_token
  after_create :create_profile

  # validates :name, presence: true

  def as_json(ops={})
    {
      id: id,
      email: email,
      token: authentication_token,
    }
  end

  def lite_json
    {
      id: id,
      name: profile.nickname,
      desc: profile.desc,
      avatar: profile.avatar,
    }
  end

  def generate_profile(nickname)
  end

  def following?(other_user)
    !!relationships.find_by_followed_id(other_user.id)
  end

  def follow(other_user)
    rel = relationships.create(followed_id: other_user.id)
    rel.save
  end

  def unfollow!(other_user)
    relationships.find_by_followed_id(other_user.id).destroy
  end

end
