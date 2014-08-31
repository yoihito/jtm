class MarketController < ApplicationController
  def index
  	@tests = Test.all
  end
end
