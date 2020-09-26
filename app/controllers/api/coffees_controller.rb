class Api::CoffeesController < ApplicationController
  def index
    @coffees = Coffee.coffees_with_photos
    render :json => @coffees
  end

  def show
    @coffee = Coffee.coffee_with_photos(params[:id])
    render :json => @coffee
  end
end