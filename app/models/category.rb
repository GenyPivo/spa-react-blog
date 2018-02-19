class Category < ApplicationRecord
  has_many :comments, as: :commentable
  has_many :posts

  validates :name, length: { minimum: 4 }
end
