class TestPassingController < ApplicationController
	def get
		@slides = Test.find(params[:id]).slides
	end

	def save

	end

	def result
	end
end
