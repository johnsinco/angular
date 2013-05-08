class User
  include Mongoid::Document
  field :first_name, :type => String
  field :last_name, :type => String
  field :phone, :type => String
  field :username, :type => String
  field :password, :type => String
end
