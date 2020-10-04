require 'rails_helper'

RSpec.describe 'Api::Coffees', type: :request do
  before :all do
    User.create(
      email: 'a@a.com',
      password: '000000',
      password_confirmation: '000000'
    )
    Coffee.initialize_with_images({ name: 'Musoso Grande', description: 'amazing...' }).save
    Coffee.initialize_with_images({ name: 'Geisha Bebeka', description: 'amazing...' }).save
    Favorite.create(
      coffee_id: Coffee.last.id,
      user_id: User.last.id
    )
  end

  describe 'GET api/coffees' do
    before :all do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
    end

    it 'returns all coffees in an array' do
      get 'http://localhost:3000/api/coffees'
      expect(JSON[response.body].size).to be(2)
    end

    it 'returns all coffees in an array - falsy' do
      get 'http://localhost:3000/api/coffees'
      expect(JSON[response.body].size).not_to be(3)
    end

    it 'returns warning message if not logged in' do
      delete 'http://localhost:3000/sessions/1'
      get 'http://localhost:3000/api/coffees'
      expect(response.body).to eq('You must login first to perform this action.')
    end
  end

  describe 'POST api/coffees' do
    before :all do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
    end

    it 'creates a coffee successfully' do
      post 'http://localhost:3000/api/coffees',
           params:
             { coffee:
               { name: 'Kubilay Blend', description: 'amazing', photo_attributes: { image: '' } } }
      expect(JSON[response.body]['success']).to be true
    end

    it 'returns a warning if not logged in ' do
      delete 'http://localhost:3000/sessions/1'
      post 'http://localhost:3000/api/coffees'
      expect(response.body).to eq('You must login first to perform this action.')
    end
  end

  describe 'GET api/coffees/:id' do
    before :all do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
    end

    it 'returns the single coffee object with the given id' do
      get "http://localhost:3000/api/coffees/#{Coffee.last.id}"
      expect(JSON[response.body]['name']).to eq('Geisha Bebeka')
    end

    it 'returns a warning if not logged in ' do
      delete 'http://localhost:3000/sessions/1'
      get "http://localhost:3000/api/coffees/#{Coffee.last.id}"
      expect(response.body).to eq('You must login first to perform this action.')
    end
  end
end
