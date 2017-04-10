class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy#, class_name: 'Posts::Comment'
  has_many :likes, dependent: :destroy, as: :likeable

  default_scope     -> { where(headlines: false).order(created_at: 'desc') }
  scope :picked,    -> { where(category: 'picked') }
  scope :anonymous, -> { where(category: 'anonymous') }

  validates :title, presence:true

  before_save :default_values

  def default_values
    self.category  ||= 'newest'
    self.headlines ||= false
    return true # 因为ruby默认返回最后一句的值, 而上一句的值为false, 所以before_save验证不通过, 导致无法保存post
  end

  def as_json(options={})
    {
      id:             id,
      title:          title,
      category:       category,
      content:        content,
      comments:       comments,
      created_at:     created_at,
      liked:          is_liked(options[:user_id]),
      likes_count:    likes.count,
      author:         user.try(:name),
      author_avatar:  user.try(:avatar)
      # category:       Post.human_attribute_name("categories.#{self.category}"),
      # author_link:    "/u/#{p.try(:user).try(:uuid)}",
      # avarar:         try(:user).try(:avatar).try(:forum).try(:to_s),
      # time:           (last_replied_at || created_at).to_s(:iso8601),
      # opens:          opens,
      # votes_count:    votes_count,
    }
  end

  private

  def is_liked(user_id)
    likes.map(&:user_id).include?(user_id)
  end

end
