class NotifyChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notify_channel"
  end

  def unsubscribed
    p 123
  end
end
