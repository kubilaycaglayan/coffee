require 'rails_helper'

RSpec.describe Favorite, type: :model do
  before :each do
    Coffee.create
    User.create(
      email: 't@t.com',
      password: '000000',
      password_confirmation: '000000'
    )
  end

  let(:favorite) { Favorite.create(user_id: 1, coffee_id: 1) }

  describe 'associations' do
    it 'belongs to a user' do
      expect(favorite).to respond_to(:user)
    end

    it 'belongs to a coffee' do
      expect(favorite).to respond_to(:coffee)
    end

    it 'falsy' do
      expect(favorite).not_to respond_to(:dinosour)
    end
  end
end
