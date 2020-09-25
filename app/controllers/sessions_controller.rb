class SessionsController < ApplicationController
  layout :inside_outside

  def new
  end

  def create
  end

  def destroy
  end

  private
  def inside_outside
    user_signed_in? ? "inside" : "outside"
  end
end
