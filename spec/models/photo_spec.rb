require 'rails_helper'

RSpec.describe Photo, type: :model do
  before :each do
    Coffee.create(name: '', description: '')
  end

  let(:photo_instance) do
    Photo.create(
      coffee_id: 1
    )
  end

  let(:photo_instance_invalid) do
    photo = Photo.new(
      coffee_id: 1
    )
    photo.image = URI.parse('https://i.pinimg.com/originals/66/8f/79/668f79a6ea6cf007223b6ffe69c7c8e9.gif')
    photo.save
  end

  describe 'associations' do
    it 'belongs to coffee' do
      expect(photo_instance).to respond_to(:coffee)
    end

    it 'has attached file' do
      expect(photo_instance).to respond_to(:image)
    end

    it 'falsy' do
      expect(photo_instance).not_to respond_to(:dinosour)
    end
  end

  describe 'validations' do
    it 'is valid with the image/jpg, image/jpeg, image/png types' do
      photo = Photo.new(
        coffee_id: Coffee.last.id
      )
      photo.image = URI.parse('https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg')
      expect(photo).to be_valid
    end

    it 'falsy' do
      photo = Photo.new(
        coffee_id: 1
      )
      photo.image = URI.parse('https://i.pinimg.com/originals/66/8f/79/668f79a6ea6cf007223b6ffe69c7c8e9.gif')
      expect(photo).not_to be_valid
    end
  end
end
