class NotifyChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notify_channel"
  end

  def unsubscribed

  end
end
