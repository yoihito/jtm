class TestPassingController < ApplicationController
	def get
		@test = Test.find(params[:id])
    	@slides = @test.slides
	end

	def save
		@answers = UserAnswer.find_or_initialize_by(user_id: current_user.id, test_id: params[:id])
		@answers.answers = answers_params
		@answers.save
		render :nothing => true, :status => 200, :content_type => 'text/html'
	end

	def result
	end

private

	def answers_params
		params.require(:slides)
	end


end
