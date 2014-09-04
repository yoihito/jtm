class TestsController < ApplicationController
	before_action :set_test, only: [:edit, :update,:upvote,:downvote]

	def create
		@test = Test.new(test_params)
		@test.save
	end

	def update
		@test.update(test_params)
	end

	def upvote
		@test.upvote
	end

	def downvote
		@test.downvote
	end

	def destroy
	end

	def show
	end

	def index
	end

	def edit
	end

	def new
		@test = Test.new
		10.times { @test.slides.build }
	end

private

	def test_params
		params.require(:test).permit(:title, :picture, slides_attributes: [:id,:question, :picture])
	end

	def set_test
		@test = Test.find(params[:id])
	end


end
