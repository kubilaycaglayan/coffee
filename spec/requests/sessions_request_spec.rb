require 'rails_helper'
require 'json'

RSpec.describe "Sessions", type: :request do
  describe 'GET /sessions' do
    it 'returns loggedIn: false' do
      get 'http://localhost:3000/sessions'
      expect(JSON[response.body]['loggedIn']).to be false
    end

    it 'returns loggedIn: false - falsy' do
      get 'http://localhost:3000/sessions'
      expect(JSON[response.body]['loggedIn']).not_to be true
    end
  end

  describe 'POST /sessions' do
    before :all do
      p User.create(
        email: 'a@a.com',
        password: '000000',
        password_confirmation: '000000',
      )
    end

    it 'returns a session hash on successful login' do
      post 'http://localhost:3000/sessions', :params => { :user => { email: 'a@a.com', password: '000000' } }
      expect(JSON[response.body]['loggedIn']).to be true
      expect(JSON[response.body]['user']['email']).to eq('a@a.com')
    end

    it 'returns loggedIn:false on invalid login' do
      post 'http://localhost:3000/sessions', :params => { :user => { email: 'a@a.com', password: 'wrongpass' } }
      expect(JSON[response.body]['loggedIn']).to be false
    end

    it 'returns loggedIn:false on invalid login - falsy' do
      post 'http://localhost:3000/sessions', :params => { :user => { email: 'a@a.com', password: 'wrongpass' } }
      expect(JSON[response.body]['loggedIn']).not_to be true
    end
  end

  describe 'DELETE /sessions/:id' do
    it 'resets the current session and returns status information' do
      delete 'http://localhost:3000/sessions/1'
      expect(JSON[response.body]['status']).to be(200)
      expect(JSON[response.body]['loggedIn']).to be false
    end
  end
end
