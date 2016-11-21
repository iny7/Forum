class Project < ActiveRecord::Base
  belongs_to :user
  has_many :todos, dependent: :destroy
  validates :name, presence:true,
                    length: { minimum: 5 }
end