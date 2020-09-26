class Coffee < ApplicationRecord
  has_many :photos, dependent: :destroy

  def self.coffees_with_photos
    coffees = Coffee.all
    result = []
    coffees.each do |coffee|
      coffe_photos = []
      coffee.photos.each do |photo|
        coffe_photos << photo.image.url
      end
      result << {
        name: coffee[:name],
        description: coffee[:description],
        photos: coffe_photos
      }
    end
    result
  end
end
