class Api::FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
    favorite_coffees = Coffee.favorite_coffees_with_photos(current_user)
    render json: [favorite_coffees].flatten
  end

  def create
    fav = Favorite.new(user_id: current_user.id, coffee_id: params[:id])
    if fav.save
      render json: {
        success: true
      }
    else
      render json: {
        success: false
      }
    end
  end

  def destroy
    fav = Favorite.find_by(user_id: current_user.id, coffee_id: params[:id])
    if fav.destroy
      render json: {
        success: true
      }
    else
      render json: {
        success: false
      }
    end
  end
end
