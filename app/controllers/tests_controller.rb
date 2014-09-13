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
		if !current_user.nil? && current_user.passed_tests.count>0
			@tests = @q.result.includes([:user_answers, :translations, :author, comments: [:author]]).where('id not in (?)',current_user.passed_tests.map{|x| x.id}.join(',')).order(@order)
		else
			@tests = @q.result.includes([:user_answers, :translations, :author, comments: [:author]]).order(@order)
		end
		
	end

private


	def set_test
		@test = Test.find(params[:id])
	end


end
