class TestsController < ApplicationController
	before_action :set_test, only: [:show]

	def show
	end

	def index
		@tests = Test.includes([:user_answers,:translations,:voters, :author]).order(:id).reverse_order
	end

private


	def set_test
		@test = Test.find(params[:id])
	end


end
