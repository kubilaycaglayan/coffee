class Coffee < ApplicationRecord
  has_one :photo, dependent: :destroy
  accepts_nested_attributes_for :photo
  has_many :favorites, dependent: :destroy
  has_many :favoriters, source: :user, through: :favorites, class_name: 'User'

  def self.coffees_with_photos(user)
    coffees = Coffee.all
    jsonifize_coffee(coffees, user)
  end

  def self.favorite_coffees_with_photos(user)
    coffees = user.favorite_coffees
    jsonifize_coffee(coffees, user)
  end

  def self.coffee_with_photos(id, user)
    coffee = Coffee.find_by(id: id)
    jsonifize_coffee([coffee], user)
  end

  def self.jsonifize_coffee(collection, user = nil)
    result = []
    collection.each do |coffee|
      result << {
        id: coffee[:id],
        name: coffee[:name],
        description: coffee[:description],
        photo: coffee.photo.image.url,
        favorite: coffee.favoriters.include?(user)
      }
    end
    return result.first if result.size == 1

    result
  end

  def self.initialize_with_images(coffee_params)
    coffee = Coffee.new(coffee_params)
    photo = Photo.new(coffee_id: coffee.id)
    photo.image = File.new(Rails.root.join('public', 'images', 'coffee-image.jpg'))
    coffee.photo = photo
    coffee
  end
end
