class LikesController < ApplicationController

	def create
		@like = Like.new
		@like.entity = context
		@like.author = current_user
		unless @like.entity.liked? current_user
			@like.save
			redirect_to :back
		else
			head :bad_request
		end
		
	end

	def destroy
		if context.liked? current_user
			like = Like.where(entity: context, author: current_user).take
			like.destroy
			redirect_to :back
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
