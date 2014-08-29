class TestPassingController < ApplicationController
	def get
		@slides = Test.find(params[:id]).slides
	end

	def save
		@answers = UserAnswers.find_or_initialize_by(user_id: current_user.id, test_id: params[:id])
		@answers.answers = answers_params
		@answers.save
	end

	def result
	end

private

	def answers_params
		params.require(:slides)
	end


end
