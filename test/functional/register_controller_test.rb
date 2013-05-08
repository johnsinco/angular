require 'test_helper'

describe RegisterController do

  before do
    @user = User.create(first_name: "Ron", last_name: "Burgundy", username: "anchorman")
  end

  it "new" do
   get :welcome
   assigns(:user).must_be_instance_of User 
  end
end
