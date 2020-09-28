class Api::CoffeesController < ApplicationController
  before_action :authenticate_user!

  def index
    @coffees = Coffee.coffees_with_photos(current_user)
    render json: @coffees
  end

  def show
    @coffee = Coffee.coffee_with_photos(params[:id], current_user)
    render json: @coffee
  end

  def create
    @coffee = if params[:coffee][:photo_attributes][:image] == ''
                Coffee.initialize_with_images(coffee_params)
              else
                Coffee.new(coffee_params)
              end

    if @coffee.save
      render json: {
        success: true
      }
    else
      render json: {
        success: false
      }
    end
  end

  private

  def coffee_params
    params.require(:coffee).permit(:name, :description, :photo, photo_attributes: [:image])
  end
end
