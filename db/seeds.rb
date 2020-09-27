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
  email: 'kubilay@coffee.com',
  password: '000000',
  password_confirmation: '000000',
  )
User.create(
  email: 'tse@best.com',
  password: 'microverse',
  password_confirmation: 'microverse',
  )

coffees = [
  {
    name: 'Moliendo Ethiopia Geisha Bebeka',
    description: 'In the southwest corner of Ethiopia near the village of Gesha... You will never forget this experience.',
    image_path: 'https://coffeefriendzone.com/wp-content/uploads/2019/03/bebeka.png'
  },
  {
    name: 'NO BLEND! Ethiopia Yirgacheffe',
    description: 'Amazing taste. For true coffee addictives!',
    image_path: 'https://atorigin.coffee/wp-content/uploads/ethiopia-no-blend-768x642.jpg'
  },
  {
    name: 'Rwanda Baho \'Disaster Relief\'',
    description: 'Processed as a natural before being sent up the road to Manizales for decaffeination via the Sugarcane process.',
    image_path: 'https://cdn.shopify.com/s/files/1/0390/4361/products/RwandaBaho_WB_S_2000x.jpg?v=1600347239'
  },
  {
    name: 'Colombia Villamaria Sugarcane Decaf',
    description: 'A natural process decaf that actually delivers on flavour!  This coffee is grown in Villamaria, Caldas.',
    image_path: 'https://cdn.shopify.com/s/files/1/0390/4361/products/ddedde_2000x.jpg?v=1597323743'
  },
  {
    name: 'Jute Coffee Sacks',
    description: 'Empty Coffee sacks for all purposes.  Be it garden waste, decorations or craft, these will fit the bill.',
    image_path: 'https://cdn.shopify.com/s/files/1/0390/4361/products/jutesac_2000x.jpg?v=1597324490'
  },
  {
    name: 'Brazil Caconde Serra do Cigano Valley',
    description: 'Toffee, Milk Chocolate, Dried Cherry',
    image_path: 'https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_490,w_490/v1585847679/cv4wrraxmhf6quyttccz.jpg'
  },
  {
    name: 'New Orleans–Style Coffee and Chicory',
    description: 'The coffee and ground chicory you need to make our NOLA at home',
    image_path: 'https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_490,w_490/v1581978832/lxguhtebcct6hqdr2qyz.jpg'
  },
  {
    name: 'Giant Steps',
    description: 'Cocoa, toasted marshmallow, graham cracker',
    image_path: 'https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/image/upload/c_thumb,h_490,w_490/v1551138095/iy69rfgek69st7sxp5hn.jpg'
  }
]

coffees.each do |coffee|
  cof = Coffee.create(
    name: coffee[:name],
    description: coffee[:description],
  )

  photo = Photo.new(coffee_id: cof.id)
  photo.image = URI.parse(coffee[:image_path])
  photo.save
end

Favorite.create(user_id: 1, coffee_id: 1)
Favorite.create(user_id: 1, coffee_id: 2)
Favorite.create(user_id: 2, coffee_id: 3)

puts "Seeding done"