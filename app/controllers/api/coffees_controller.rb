class Api::CoffeesController < ApplicationController
  def index
    @coffees = Coffee.coffees_with_photos
    render json: @coffees
  end

  def show
    @coffee = Coffee.coffee_with_photos(params[:id], current_user)
    render json: @coffee
  end

  def create
    @coffee = Coffee.initialize_with_images(coffee_params)

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
    params.require(:coffee).permit(:name, :description)
  end
end
