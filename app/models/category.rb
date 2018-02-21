class Category < ApplicationRecord
  has_many :comments, as: :commentable, dependent: :delete_all
  has_many :posts, dependent: :delete_all

  validates_format_of :name, with: /\A[A-ZА-Я]\w{1,}\.\w{2,}\z/,
                      message: 'should be in words join by dot. Like Category1.You'

  after_create :broadcast_create
  after_update :broadcast_update
  before_destroy :broadcast_destroy

  private

  def broadcast_create
    BroadcastDataJob.perform_now(self, :category_create)
  end

  def broadcast_update
    BroadcastDataJob.perform_now(self, :category_update)
  end

  def broadcast_destroy
    BroadcastDataJob.perform_now(self, :category_destroy)
  end
end
