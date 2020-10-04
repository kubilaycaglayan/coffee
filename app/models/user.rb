class User < ApplicationRecord
  has_secure_password
  has_many :favorites, dependent: :destroy
  has_many :favorite_coffees, source: :coffee, through: :favorites, class_name: 'Coffee'
  validates :email, presence: true, uniqueness: true,
                    format: { with: /.+@.+/, message: 'Email invalid' }
end
