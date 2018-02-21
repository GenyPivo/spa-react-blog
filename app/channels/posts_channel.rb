class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "post_#{params[:post_id]}_comments"
  end

  def unsubscribed

  end
end
