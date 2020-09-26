# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding..."

user = User.create(
  email: 'a@a.com',
  password: '000000',
  password_confirmation: '000000',
  )
User.create(
  email: 'b@b.com',
  password: '000000',
  password_confirmation: '000000',
  )

coffees = [
  {
    name: 'Ethiopia Geisha Bebeka',
    description: 'In the southwest corner of Ethiopia near the village of Gesha...',
    image_path: 'coffee-image.jpg'
  },
  {
    name: 'Ethiopia Yirgacheffe',
    description: 'Amazing taste',
    image_path: 'coffee-image-2.jpg'
  },
  {
    name: 'Australia Skyburry, Queensland Murebba',
    description: 'Daaamn',
    image_path: 'coffee-image.jpg'
  }
]

coffees.each do |coffee|
  cof = Coffee.create(
    name: coffee[:name],
    description: coffee[:description],
  )

  photo = Photo.new(coffee_id: cof.id)
  photo.image = File.new(Rails.root.join('public', 'images', coffee[:image_path]))
  photo.save
end

Favorite.create(user_id: 1, coffee_id: 1)
Favorite.create(user_id: 1, coffee_id: 2)
Favorite.create(user_id: 2, coffee_id: 3)

puts "Seeding done"