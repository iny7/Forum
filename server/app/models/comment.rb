class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :likes, dependent: :destroy, as: :likeable

  # after_create :notify
  def as_json(options={})
    {
      id:          id,
      post_id:     post.id,
      user_id:     user.id,
      commenter:   user.profile.try(:nickname),
      avatar:      user.profile.try(:avatar),
      content:     content,
      likes_count: likes.count,
      created_at:  created_at,
    }
  end

  private

  def liked
    id = current_user.try(:id)
    likes.map(&:user_id).include?(id)
  end

  def notify
    # websocket push收到评论的通知
  end


end
