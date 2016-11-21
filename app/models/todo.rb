class Todo < ActiveRecord::Base
  belongs_to :project
  validates :title, presence:true,
                    length: { minimum: 5 }
end