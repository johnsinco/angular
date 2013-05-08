class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :first_name, :type => String
  field :last_name, :type => String
  field :phone, :type => String
  field :username, :type => String
  field :password, :type => String

  embeds_one :address

  def self.columns
    self.fields.collect{|c| c[1]}
  end
end
