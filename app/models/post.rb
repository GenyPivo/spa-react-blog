class Post < ApplicationRecord
  has_many :comments, as: :commentable
  belongs_to :category

  has_attached_file :file
  validates_attachment :file, size: { in: 0..2.megabytes }
  do_not_validate_attachment_file_type :file
end
