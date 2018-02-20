module Api
  module V1
    class CommentsController < ApplicationController
      def create
        comment = @commentable.comments.new comment_params
        if comment.save
          render json: comment
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
