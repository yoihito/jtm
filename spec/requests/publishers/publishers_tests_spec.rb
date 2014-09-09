require 'rails_helper'

RSpec.describe "Publishers::Tests", :type => :request do
  describe "GET /publishers_tests" do
    it "works! (now write some real specs)" do
      get publishers_tests_path
      expect(response.status).to be(200)
    end
  end
end
