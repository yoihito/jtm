class TestsController < ApplicationController
	before_action :set_test, only: [:show]

	def show
	end

	def index
		if params[:q]
			if params[:q][:s]
				@order = params[:q][:s]
			else
				@order = 'created_at desc'
			end
		end
		@q = Test.search(params[:q])
		@tests = @q.result.includes([:user_answers, :translations, :author, comments: [:author]]).order(@order)
		
	end

private


	def set_test
		@test = Test.find(params[:id])
	end


end
