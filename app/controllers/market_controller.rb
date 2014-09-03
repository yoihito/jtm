class MarketController < ApplicationController
  def index
  	@tests = Test.includes([:user_answers,:translations,:voters]).all
  end
end
