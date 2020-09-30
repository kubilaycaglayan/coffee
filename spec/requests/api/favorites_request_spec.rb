require 'rails_helper'

RSpec.describe "Api::Favorites", type: :request do
  before :all do
    User.create(
      email: 'a@a.com',
      password: '000000',
      password_confirmation: '000000'
    )
    Coffee.initialize_with_images({name: '', description: ''}).save
    Favorite.create(
      coffee_id: Coffee.last.id,
      user_id: User.last.id
    )
  end

  describe 'GET api/favorites' do
    it 'returns failure message unless logged in' do
      get 'http://localhost:3000/api/favorites'
      expect(response.body).to eq('You must login first to perform this action.')
    end

    it 'returns favorite coffees in an array' do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
      get 'http://localhost:3000/api/favorites'
      expect(JSON[response.body]).to be_an_instance_of(Array)
    end
  end

  describe 'POST api/favorites' do
    before :all do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
    end
    it 'returns success message after creating a new favorite' do
      post 'http://localhost:3000/api/favorites', params: { id: Coffee.last.id }
      expect(JSON[response.body]['success']).to be true
    end

    it 'returns failure message if the coffee cannot be created' do
      post 'http://localhost:3000/api/favorites', params: { id: 'no id for you' }
      expect(JSON[response.body]['success']).to be false
    end

    it 'returns warning if not logged in' do
      delete 'http://localhost:3000/sessions/1'
      post 'http://localhost:3000/api/favorites', params: { id: Coffee.last.id }
      expect(response.body).to eq('You must login first to perform this action.')
    end
  end

  describe 'DELETE api/favorites' do
    before :all do
      post 'http://localhost:3000/sessions', params: { user: { email: 'a@a.com', password: '000000' } }
    end

    it 'successfully deletes the favorite record and returns success message' do
      delete "http://localhost:3000/api/favorites/#{Coffee.last.id}"
      expect(JSON[response.body]['success']).to be true
    end

    it 'returns false if cannot delete the coffee' do
      delete "http://localhost:3000/api/favorites/0"
      expect(JSON[response.body]['success']).to be false
    end

    it 'returns false if cannot delete the coffee - falsy' do
      delete "http://localhost:3000/api/favorites/0"
      expect(JSON[response.body]['success']).not_to be true
    end
  end
end
