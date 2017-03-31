class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy#, class_name: 'Posts::Comment'
  has_many :likes, dependent: :destroy, as: :likeable

  default_scope -> { where(headlines: false) }
  scope :picked,    -> { where(category: 'picked') }
  scope :anonymous,    -> { where(category: 'anonymous') }

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
      content:        content,
      comments:       comments,
      created_at:     created_at,
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
end
