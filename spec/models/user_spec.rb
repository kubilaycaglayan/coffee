require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    User.create(
      email: 't@t.com',
      password: '000000',
      password_confirmation: '000000'
    )
  end

  let(:invalid_user) { User.new(email: 'something', password: '000000', password_confirmation: '000000') }
  let(:invalid_user2) { User.new(email: 't@t.com', password: '000000', password_confirmation: '000000') }
  let(:valid_user) { User.new(email: 'something@something.com', password: '000000', password_confirmation: '000000') }

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

  describe 'validations' do
    it 'validates the type of email' do
      expect(invalid_user).not_to be_valid
    end

    it 'validates the type of email' do
      expect(valid_user).to be_valid
    end

    it 'validates the uniqueness of email' do
      p User.create(email: 't@t.com', password: '000000', password_confirmation: '000000')
      expect(invalid_user2).not_to be_valid
    end
  end
end
