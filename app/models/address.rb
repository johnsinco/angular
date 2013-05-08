class Address
  include Mongoid::Document
  include Mongoid::Timestamps

  field :street, type: String
  field :city, type: String
  field :state, type: String
  field :postcode, type: String
end