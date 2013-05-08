class RegisterController < ApplicationController

  respond_to :json
  respond_to :html, :only => [:welcome]

  def welcome
    @user = User.new
    respond_with @user, layout: false
  end

  def account
    @user = User.new(params[:user])
    @user.save
    respond_with @user
  end

  def prefs
  end

  def thanks
  end

end
