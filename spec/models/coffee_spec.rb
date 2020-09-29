require 'rails_helper'

RSpec.describe Coffee, type: :model do
  before :all do
    5.times do |_index|
      coffee = Coffee.create(
        name: 'Musoso Grande',
        description: 'Amazing'
      )
      photo = Photo.new(
        coffee_id: coffee.id
      )
      photo.image = File.new(Rails.root.join('public', 'images', 'coffee-image-2.jpg'))
      photo.save!
    end
    user = User.create(
      email: 't@t.com',
      password: '000000',
      password_confirmation: '000000'
    )
    Favorite.create(coffee_id: Coffee.last.id, user_id: user.id)
    Favorite.create(coffee_id: Coffee.last.id - 1, user_id: user.id)
  end

  after :all do
    Coffee.destroy_all
    Photo.destroy_all
    User.destroy_all
    Favorite.destroy_all
  end

  describe 'associations' do
    it 'has one photo' do
      expect(Coffee.last).to respond_to(:photo)
    end

    it 'has many favorites' do
      expect(Coffee.last).to respond_to(:favorites)
    end

    it 'has many favoriters' do
      expect(Coffee.last).to respond_to(:favoriters)
    end
  end

  describe 'class methods do' do
    describe 'coffees_with_photos' do
      it 'returns an array containing all the photos' do
        expect(Coffee.coffees_with_photos(User.first).size).to eq(5)
      end

      it 'has information of favorites' do
        expect(
          Coffee.coffees_with_photos(User.first)
            .map do |user_hash|
              user_hash[:favorite]
            end
        ).to eq([false, false, false, true, true])
      end

      it 'has information of photo' do
        expect(Coffee.coffees_with_photos(User.first)[0][:photo]).to be_an_instance_of(String)
      end
    end

    describe 'favorite_coffees_with_photos' do
      it 'returns and array that consist of only favorite coffees' do
        expect(Coffee.favorite_coffees_with_photos(User.first).size).to be(2)
      end

      it 'has information of photo' do
        expect(Coffee.favorite_coffees_with_photos(User.first)[0][:photo]).to be_an_instance_of(String)
      end
    end

    describe 'coffee_with_photos' do
      it 'returns a hash' do
        expect(Coffee.coffee_with_photos(Coffee.last.id, User.first)).to be_an_instance_of(Hash)
      end

      it 'has information of photo' do
        expect(Coffee.coffee_with_photos(Coffee.last.id, User.first)[:photo]).to be_an_instance_of(String)
      end
    end

    describe 'jsonifize_coffee' do
      it 'returns an array if the collection has more than 1 element' do
        expect(Coffee.jsonifize_coffee(Coffee.all)).to be_an_instance_of(Array)
      end

      it 'returns a hash if the collection has 1 element' do
        expect(Coffee.jsonifize_coffee([Coffee.first])).to be_an_instance_of(Hash)
      end

      it 'provides id, name, description, photo, favorite informations' do
        expect(Coffee.jsonifize_coffee([Coffee.first])[:id]).to be_an_instance_of(Integer)
        expect(Coffee.jsonifize_coffee([Coffee.first])[:name]).to be_an_instance_of(String)
        expect(Coffee.jsonifize_coffee([Coffee.first])[:description]).to be_an_instance_of(String)
        expect(Coffee.jsonifize_coffee([Coffee.first])[:photo]).to be_an_instance_of(String)
        expect(Coffee.jsonifize_coffee([Coffee.first])[:favorite]).to be_in([true, false])
      end
    end

    describe 'initialize_with_images' do
      it 'returns a coffee instance with the defeault image set' do
        expect(
          Coffee.initialize_with_images({ name: 'My lovely coffee', description: 'amazing taste' })
            .photo.image.url
        ).to be_an_instance_of(String)
      end
    end
  end
end
