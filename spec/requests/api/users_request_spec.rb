require 'rails_helper'

RSpec.describe "Api::Users", type: :request do
  describe 'POST api/users' do
    it 'creates user' do
      post 'http://localhost:3000/api/users', params: { user: { email: 'a@a.com', password: '000000', password_confirmation: '000000' } }
      expect(JSON[response.body]['success']).to be true
    end

    it 'does not creates user if password confirmation does not match' do
      post 'http://localhost:3000/api/users', params: { user: { email: 'a@a.com', password: '000000', password_confirmation: 'nope' } }
      expect(JSON[response.body]['success']).to be false
    end
  end
end
