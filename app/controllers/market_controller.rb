class MarketController < ApplicationController
  def index
  	@tests = Test.includes(:user_answers).all
  end
end
