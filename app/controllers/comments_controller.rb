class CommentsController < ApplicationController
	
	def create
		@comment = Comment.new(comment_params)
		@comment.author = current_user
		@comment.save
	end

	def update
	end

	def destroy
	end

private
	
	def comment_params
		params.require(:comment).permit(:content,:entity_id, :entity_type)
	end


end
