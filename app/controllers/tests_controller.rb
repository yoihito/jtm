class TestsController < ApplicationController
	before_action :set_test, only: [:show]

	def show
	end

	def index
		@order = 'created_at desc'
		if params[:q] && params[:q][:s]
				@order = params[:q][:s]
		end
		@q = Test.search(params[:q])
		@tests = @q.result.includes([:user_answers, :translations, :author, comments: [:author]]).order(@order)
		
	end

private


	def set_test
		@test = Test.find(params[:id])
	end


end
