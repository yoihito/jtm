class TestPassingController < ApplicationController
	def get
		@test = Test.find(params[:id])
  	@slides = @test.slides.includes(:translations)#,comments:[:author])
  	@slides.each_with_index do |s|
  		s.init_comment_form
  	end

	  respond_to do |format|
      if request.xhr?
        format.html { render layout: nil }
      else
        format.html { render 'get', layout: 'test' }
      end
  	end

	end

	def save
		unless current_user.nil?
			@answers = UserAnswer.find_or_initialize_by(user_id: current_user.id, test_id: params[:id])
			@answers.answers = answers_params
			@answers.save
		else

		end
		render :nothing => true, :status => 200, :content_type => 'text/html'
	end

	def result
    @test = Test.includes(comments:[:author]).find(params[:id])
    @answers = @test.user_answers
    respond_to do |format|
      if request.xhr?
        format.html { render layout: nil }
      else
        format.html { render 'result' }
      end
    end
	end

private

	def answers_params
		params.require(:slides)
	end


end
