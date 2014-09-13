class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :change_password, :change_avatar]
  after_action :verify_authorized, except: [:show]

  def show
    @user = User.find(params[:id])
    #includes(passed_tests:[:user_answers,:translations,:voters, :author]).
    @answers = UserAnswer.includes(test:[:translations,:author, :user_answers]).where(user: @user).order('created_at desc').limit(6)
    @profile_tests = @answers.map{|x|x.test}#Test.where('id in (?)',@answers.map{|x|x.test_id}).
    @publishers = @user.publishers.limit(4)

  end

  def edit
    authorize @user
  end

  def update
    authorize @user
    respond_to do |format|
  	  if @user.update(user_params)
        format.html { redirect_to @user, notice: "Successfully updated"} 
      else
        format.html { render :edit }
      end
    end
  end
 
  def change_password
    authorize @user
  	@user.update_with_password(user_password_params)
  	sign_in @user, :bypass => true
  	render :edit
  end

  def change_avatar
    authorize @user
    respond_to do |format|
      if @user.update(user_avatar_params)
        format.html { render :nothing => true, :status => 200, :content_type => 'text/html' } 
      else
        format.html { render :nothing => true, :status => 404, :content_type => 'text/html' }
      end
    end
    
    
  end

private

  def set_user
  	@user = User.find(params[:id])
  end

  def user_params
  	p = params.require(:user).permit(:name, :language, :gender, :birthday)
  	{name: p[:name], language: p[:language], profile:{gender: p[:gender], birthday: p[:birthday]}}
  end

  def user_password_params
  	params.require(:user).permit(:current_password, :password)
  end

  def user_avatar_params
    params.require(:user).permit(:avatar)
  end

end
