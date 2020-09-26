class Coffee < ApplicationRecord
  has_many :photos, dependent: :destroy
end
