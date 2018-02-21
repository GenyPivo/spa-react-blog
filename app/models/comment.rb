class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true

  after_create_commit :broadcast

  validates_presence_of :content, :author
  validates_format_of :author, with: /\A[A-ZА-Я]\w{1,}\.[A-ZА-Я]\w{1,}\z/,
                      message: 'should be in two words separeted by . with capital letters. Like John.Doe'

  private

  def broadcast
    if commentable_type == 'Post'
      BroadcastDataJob.perform_now(self, :comment)
    end
  end
end
