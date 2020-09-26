class Api::CoffeesController < ApplicationController
  def index
    @coffees = Coffee.coffees_with_photos
    render :json => @coffees
  end

  def show
    @coffee = Coffee.coffee_with_photos(params[:id], current_user)
    render :json => @coffee
  end
end