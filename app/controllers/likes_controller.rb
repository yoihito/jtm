class LikesController < ApplicationController
	after_action :verify_authorized

	def create
		@like = Like.new
		@like.entity = context
		@like.author = current_user
		authorize @like
		unless @like.entity.liked? current_user
			@like.save
			redirect_to :back
		else
			head :bad_request
		end
		
	end

	def destroy
		authorize Like.new
		if context.liked? current_user
			like = Like.where(entity: context, author: current_user).take
			like.destroy
			redirect_to :back,  status: 303  
		else
			head :bad_request
		end

		
	end

private
	
	def context
		if params[:publisher_id]
			Publisher.find(params[:publisher_id])
		end
	end
	
end
