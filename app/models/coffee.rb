class Coffee < ApplicationRecord
  has_one :photo, dependent: :destroy

  def self.coffees_with_photos
    coffees = Coffee.all
    result = []
    coffees.each do |coffee|
      result << {
        id: coffee[:id],
        name: coffee[:name],
        description: coffee[:description],
        photo: coffee.photo.image.url
      }
    end
    result
  end

  def self.coffee_with_photos(id)
    coffee = Coffee.find_by(id: id)
    result = {
      id: coffee[:id],
      name: coffee[:name],
      description: coffee[:description],
      photo: coffee.photo.image.url
    }
  end
end
