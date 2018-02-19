class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show]

  def index
    render json: Category.all
  end

  def create
    category = Category.new(permitted_params)
    if category.save
      render json: category
    else
      render json: { error: 'Some error' }, status: 400
    end
  end

  def show
    render json: @category
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def permitted_params
    params.permit(:name, :description)
  end
end
