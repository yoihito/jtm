class CommentsController < ApplicationController
	before_action :set_comment, only: [:update, :destroy]
	
	def create
		@comment = Comment.new(create_comment_params)
		@comment.author = current_user
		respond_to do |f|
			if @comment.save
				f.html { redirect_to :back, notice: 'Comment was successfully published!'}
			else
				f.html { redirect_to :back }
			end


		end
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
