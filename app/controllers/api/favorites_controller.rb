class Api::FavoritesController < ApplicationController
  def index
    favorite_coffees = Coffee.favorite_coffees_with_photos(current_user)
    render :json => favorite_coffees
  end

  def create
  end

  def destroy
  end
end