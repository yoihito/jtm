class RatingsController < ApplicationController
	before_action :set_context, only: [:create, :destroy]
	after_action :verify_authorized

	def create
		authorize :rating, :create?
		@context.upvote current_user
	end

	def destroy
		authorize :rating, :destroy?
		@context.downvote current_user
	end

private 

	def set_context 
		if params[:test_id]
			@context = Test.find(params[:test_id])
		end
	end
end
