class Api::V1::PostsController < ApplicationController
  before_action :set_category, only: [:index, :create]
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: @category.posts.includes(:comments)
  end

  def create
    post = @category.posts.new(permitted_params)
    if post.save
      render json: post
    else
      render api_error(post)
    end
  end

  def show
    render json: @post
  end

  def update
    if @post.update(permitted_params)
      render json: @post
    else
      render api_error(@post), status: 400
    end
  end

  def destroy
    if @post.destroy
      render json: @post
    else
      render api_error(@post), status: 400
    end
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :content, :file)
  end
end
