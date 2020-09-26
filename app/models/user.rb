class User < ApplicationRecord
  has_secure_password
  has_many :favorites
  has_many :favorite_coffees, source: :coffee, through: :favorites, class_name: 'Coffee'
end
