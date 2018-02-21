class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :destroy, :update]

  def index
    render json: Category.all
  end

  def create
    category = Category.new(permitted_params)
    if category.save
      render json: category
    else
      puts api_error(category)
      render api_error(category)
    end
  end

  def show
    render json: @category
  end

  def update
    if @category.update(permitted_params)
      render json: @category
    else
      render api_error(@category)
    end
  end

  def destroy
    if @category.destroy
      render json: @category
    else
      render api_error(@category)
    end
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :description)
  end
end
