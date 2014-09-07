class CommentsController < ApplicationController
	before_action :set_comment, only: [:update, :destroy]
	
	def create
		@comment = Comment.new(comment_params)
		@comment.author = current_user
		@comment.save
	end

	def update
		@comment.update(update_comment_params)
	end

	def destroy
		@comment.destroy
	end

private
	
	def set_comment
		@comment = Comment.find(params[:id])
	end


	def create_comment_params
		params.require(:comment).permit(:content,:entity_id, :entity_type)
	end

	def update_comment_params
		params.require(:comment).permit(:content)
	end


end
