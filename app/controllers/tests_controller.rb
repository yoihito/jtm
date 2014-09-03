class TestsController < ApplicationController
	def create
		@test = Test.new(test_params)
		@test.save
	end

	def update
	end

	def upvote
		@test = Test.find(params[:id])
		@test.upvote
	end

	def downvote
		@test = Test.find(params[:id])
		@test.downvote
	end

	def destroy
	end

	def show
	end

	def index
	end

	def new
		@test = Test.new
		10.times { @test.slides.build }
	end

private

	def test_params
		params.require(:test).permit(:title, slides_attributes: [:id,:question])
	end


end
