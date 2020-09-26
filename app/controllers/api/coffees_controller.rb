class Api::CoffeesController < ApplicationController
  def index
    @coffees = Coffee.coffees_with_photos
    render :json => @coffees
  end

  def create

  end
end