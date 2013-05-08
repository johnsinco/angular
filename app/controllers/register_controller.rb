class RegisterController < ApplicationController

  respond_to :json
  
  # step 1
  def new
    @user = User.new
  end

  # step 2
  def account
  end

  # step 3
  def verify
  end

  # step 4
  def thanks
  end

end
