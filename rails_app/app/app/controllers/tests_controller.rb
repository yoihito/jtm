class TestsController < ApplicationController
	def create
		@test = Test.new(test_params)
		@test.save
	end

	def update
	end

	def destroy
	end

	def show
	end

	def index
	end

	def new
		@test = Test.new
		2.times { @test.slides.build }
	end
	
private 

	def test_params
		params.require(:test).permit(slides_attributes: [:id,:question])
	end


end
