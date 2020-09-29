require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    User.create(
      email: 't@t.com',
      password: '000000',
      password_confirmation: '000000'
    )
  end

  describe 'associations' do
    it 'has many favorites' do
      expect(user).to respond_to(:favorites)
    end

    it 'has many favorite_coffees' do
      expect(user).to respond_to(:favorite_coffees)
    end

    it 'falsy' do
      expect(user).not_to respond_to(:favs)
    end
  end
end
