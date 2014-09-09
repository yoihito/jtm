class RatingsController < ApplicationController
	before_action :set_context, only: [:create, :destroy]

	def create
		@context.upvote
	end

	def destroy
		@context.downvote
	end

private 

	def set_context 
		if params[:test_id]
			@context = Test.find(params[:test_id])
	end
end
