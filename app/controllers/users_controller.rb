class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :change_password]

  def show
    @user = User.includes(passed_tests:[:user_answers,:translations,:voters]).find(params[:id])
  end

  def edit

  end

  def update
    respond_to do |format|
  	  if @user.update(user_params)
        format.html { redirect_to @user, notice: "Successfully updated"} 
      else
        format.html { render :edit }
      end
    end
  end
 
 def change_password
  	@user.update_with_password(user_password_params)
  	sign_in @user, :bypass => true
  	render :edit
  end

private

  def set_user
  	@user = User.find(params[:id])
  end

  def user_params
  	p = params.require(:user).permit(:name, :language, :gender, :birthday, :avatar)
  	{name: p[:name], language: p[:language], profile:{gender: p[:gender], birthday: p[:birthday]}, avatar: p[:avatar]}
  end

  def user_password_params
  	params.require(:user).permit(:current_password, :password)
  end

end
