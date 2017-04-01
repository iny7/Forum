class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :likeable, polymorphic: true
  scope :post,     -> { where(likeable_type: 'post') }
  scope :comment,  -> { where(likeable_type: 'comment') }

  validates :likeable_id,   presence:true
  validates :likeable_type, presence:true

end