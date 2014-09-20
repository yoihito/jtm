class TestPassingController < ApplicationController
  before_action :set_test, except: [:result, :save]


	def get
		@test = Test.find(params[:id])
  	@slides = @test.slides.includes(:translations).order_by_id#,comments:[:author])
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
      session[:test_pass] = {test_id: params[:id], answers: answers_params}
		end
		render :nothing => true, :status => 200, :content_type => 'text/html'
	end

	def result
    unless current_user.nil?

      @user_answers = UserAnswer.test_by_user(params[:id],current_user.id).take
      if @user_answers.nil?
        redirect_to try_test_path(params[:id])
        return
      end

      @test = Test.includes(comments:[:author]).find(params[:id])
      @tests = Test.popular.not_passed(current_user).includes(:translations,:publisher,:comments).first(8)
      @all_answers = @test.user_answers

      respond_to do |format|
        if request.xhr?
          format.html { render layout: nil }
        else
          format.html { render 'result', layout: 'test' }
        end
      end
    else
      respond_to do |format|
        if request.xhr?
          format.html { render 'sign_up', layout: nil}
        else
          format.html { render 'sign_up', layout: 'test'}
        end
      end
    end
	end

private

	def answers_params
		params.require(:slides)
	end

  def set_test
    @test = Test.find(params[:id])
  end


end
