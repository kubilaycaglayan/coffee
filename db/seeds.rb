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


cof = Coffee.create(
  name: 'Ethiopia Geisha Bebeka',
  description: 'In the southwest corner of Ethiopia near the village of Gesha...',
)

photo = Photo.new(coffee_id: cof.id)
photo.image = File.new(Rails.root.join('public', 'images', 'coffee-image.jpg'))
photo.save

puts "Seeding done"