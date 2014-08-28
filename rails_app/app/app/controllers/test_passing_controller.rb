class TestPassingController < ApplicationController
	def get
		@slides = Test.find(params[:id]).slides
	end

	def save
		#binding.pry
		@answers = UserAnswers.find_or_initialize_by(user_id: current_user.id, test_id: params[:id])
		@answers.answers = answers_params
		#@answers.user_id = current_user.id
		#@answers.test_id = params[:id]
		logger.debug "#{@answers.inspect}"
		@answers.save
	end

	def result
	end

private

	def answers_params
		params.require(:slides)
	end


end
