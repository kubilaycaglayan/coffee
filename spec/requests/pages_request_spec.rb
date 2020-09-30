require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe 'GET pages' do
    it 'redirects any undefined path to the pages#index' do
      get 'http://localhost:3000/anykindofrequest'
      expect(response).to render_template('pages/index')
    end

    it 'redirects default url to the pages#index' do
      get 'http://localhost:3000/'
      expect(response).to render_template('pages/index')
    end
  end
end
