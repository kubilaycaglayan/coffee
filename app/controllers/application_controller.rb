class ApplicationController < ActionController::Base
  include SessionsHelper

  private

  def authenticate_user!
    render plain: "You must login first to perform this action." unless current_user
  end
end
