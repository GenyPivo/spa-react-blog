class BroadcastDataJob < ApplicationJob
  queue_as :default

  def perform(data, type)
    puts type, data

    case type
      when :comment
        ActionCable.server.broadcast "post_#{data.commentable_id}_comments", comment: data
      when :category_create
        ActionCable.server.broadcast 'notify_channel', category: data, action: 'create'
      when :category_update
        ActionCable.server.broadcast 'notify_channel', category: data, action: 'update'
      when :category_destroy
        ActionCable.server.broadcast 'notify_channel', category: data, action: 'destroy'
    end
  end
end
