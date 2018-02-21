class Post < ApplicationRecord
  has_many :comments, as: :commentable
  belongs_to :category

  validates_format_of :name, with: /\A[A-ZА-Я]\w{1,}\.\w{2,}\z/,
                      message: 'should be in words join by dot. Like Post.You'

  has_attached_file :file
  validates_attachment :file, size: { in: 0..2.megabytes }
  do_not_validate_attachment_file_type :file
end
