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
        loggedIn: true,
        user: user
      }
    else
      puts "USER NOT FOUND"
      render json: {
        loggedIn: false,
      }
    end
  end

  def destroy
    reset_session
    render json: {
      status: 200,
      loggedIn: false
    }
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
