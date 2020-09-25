require 'byebug'

class SessionsController < ApplicationController
  def new
  end

  def create
    puts "SESSIONS CONTROLLER"
    puts "SESSIONS CONTROLLER"
    puts "SESSIONS CONTROLLER"
    puts "SESSIONS CONTROLLER"
    p user_params
    user = User
      .find_by(email: user_params[:email])
      .try(:authenticate, params['user']['password'])
    if user
      puts "USER FOUND"
      session[:user_id] = user.id
      render json: {
        status: 'created',
        logged_in: true,
        user: user
      }
    else
      puts "USER NOT FOUND"
      render json: {
        status: :created,
        logged_in: false,
        user: 'unknown'
      }
    end
  end

  def destroy
    reset_session
    render json: {
      status: 200,
      logged_in: false
    }
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
