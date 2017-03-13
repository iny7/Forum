class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :likes, dependent: :destroy, as: :likeable

  # after_create :notify
  def as_json
    {
      id:          id,
      author:      user.name,
      content:     content,
      created_at:  created_at
    }
  end

  private
  def notify
    # websocket push收到评论的通知
  end


end
