class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :created_at
  has_many :comments
  
  def created_at
    object.created_at.strftime('%m/%d/%Y - %I:%M%p')
  end
end
