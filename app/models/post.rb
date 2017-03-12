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
    return true # 因为ruby默认返回最后一句的值, 而上一句的值为false, 所以before_save验证不通过, 导致无法保存post
  end
end
