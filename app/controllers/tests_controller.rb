class TestsController < ApplicationController
	before_action :set_test, only: [:show]

	def show
	end

	def index
		@q = Test.includes([:user_answers, :translations, publisher: [:owners], comments: [:author]]).search
    @order = 'created_at desc'
		if params[:q] && params[:q][:s]
				@order = params[:q][:s]
		end

		if !current_user.nil? && current_user.user_answers.count>0

      if @order == 'passed_tests desc'
        @tests = @q.result
            .where('id in (?)', current_user.user_answers.map{|x| x.test_id})
      else
        @tests = @q.result
            .where('id not in (?)', current_user.user_answers.map{|x| x.test_id})
            .order(@order)
      end
		else
      @tests = @q.result.order(@order) unless @order == 'passed_tests desc'
		end

	end

private


	def set_test
		@test = Test.find(params[:id])
	end


end
