class CommentsController < ApplicationController
	before_action :set_context
	before_action :set_comment, only: [:update, :destroy]
	after_action :verify_authorized

	def create
		@comment = Comment.new(comment_params)
		@comment.entity = @context
		@comment.author = current_user
		authorize @comment
		respond_to do |f|
			if @comment.save
				f.html { render 'index', layout: nil }
			else
				f.html { render nothing: true, status: 404, :content_type => 'text/html'}
			end
		end
	end

	def update
		authorize @comment
		@comment.update(comment_params)
	end

	def destroy
		authorize @comment
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
			@context = Test.includes(comments: [:user]).find(params[:test_id])
		end
	end


end
