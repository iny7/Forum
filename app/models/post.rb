class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy, as: :likeable

  default_scope -> { where(headlines: false) }

  validates :title, presence:true#, length: { minimum: 2 }

  before_save :default_values

  def default_values
    self.category ||= 'picked'
    self.headlines ||= false
  end
end
