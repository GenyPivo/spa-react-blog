class Category < ApplicationRecord
  has_many :comments, as: :commentable
  has_many :posts
end
