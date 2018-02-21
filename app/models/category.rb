class Category < ApplicationRecord
  has_many :comments, as: :commentable, dependent: :delete_all
  has_many :posts, dependent: :delete_all

  validates :name, length: { minimum: 4 }
end
