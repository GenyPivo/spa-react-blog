class Api::V1::PostsController < ApplicationController
  before_action :set_category, only: [:index, :create]
  before_action :set_post, only: [:show]

  def index
    render json: @category.posts
  end

  def create
    post = @category.posts.new(permitted_params)
    if post.save
      render json: post
    else
      render json: { error: 'Some error' }, status: 400
    end
  end

  def show
    render json: @post
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :content)
  end
end
