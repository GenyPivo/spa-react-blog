class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :category_id, :created_at,
             :attachment_url, :content_type
  has_many :comments

  def created_at
    object.created_at.strftime('%m/%d/%Y - %I:%M%p')
  end

  def attachment_url
    return false unless object.file.file?
    object.file.url
  end

  def content_type
    return false unless object.file.file?
    object.file.instance.file_content_type
  end
end
