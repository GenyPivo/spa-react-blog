module Api
  module V1
    class CommentsController < ApplicationController
      def index
        render json: @commentable.comments
      end

      def create
        comment = @commentable.comments.new comment_params
        if comment.save
          render json: comment
          ActionCable.server.broadcast 'notify_channel', comment: comment
        else
          render json: 'Something wrong', status: 400
        end
      end

      private

      def comment_params
        params.permit(:author, :content)
      end
    end
  end
end
