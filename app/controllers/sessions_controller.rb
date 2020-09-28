class SessionsController < ApplicationController
  def create
    user = User
      .find_by(email: user_params[:email])
      .try(:authenticate, params['user']['password'])
    if user
      session[:user_id] = user.id
      render json: {
        loggedIn: true,
        user: user
      }
    else
      render json: {
        loggedIn: false
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
