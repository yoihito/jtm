class MarketController < ApplicationController
  def index
  	@tests = Test.includes([:user_answers,:translations,:voters]).order(:id).reverse_order
  end
end
