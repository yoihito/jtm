class LikesController < ApplicationController
  before_action :set_context
	after_action :verify_authorized

	def create
		@like = Like.new
		@like.entity = @context
		@like.author = current_user
		authorize @like
		unless @like.entity.liked? current_user
			@like.save
			render :nothing => true, :status => 200, :content_type => 'text/html'
		else
			head :bad_request
		end

	end

	def destroy
		authorize Like.new
		if @context.liked? current_user
			like = Like.where(entity: @context, author: current_user).take
			like.destroy
			render :nothing => true, :status => 200, :content_type => 'text/html'
		else
			head :bad_request
		end


	end

private

	def set_context
		if params[:publisher_id]
			@context=Publisher.find(params[:publisher_id])
		end
	end

end
