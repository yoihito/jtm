class CommentsController < ApplicationController
	before_action :set_context
	before_action :set_comment, only: [:update, :destroy]
	
	def create
		@comment = Comment.new(comment_params)
		@comment.entity = @context
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
		@comment.update(comment_params)
	end

	def destroy
		@comment.destroy
	end

private
	
	def set_comment
		@comment = Comment.find(params[:id])
	end


	def comment_params
		params.require(:comment).permit(:content)
	end

	def set_context
		if params[:test_id]
			@context = Test.find(params[:test_id])
	end


end
