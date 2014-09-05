class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :change_password]

  def show

  end

  def edit

  end

  def update
  	@user.update(user_params)
  	render :edit
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
  	params.require(:user).permit(:name, :language, :gender, :birthday, :avatar)
  end

  def user_password_params
  	params.require(:user).permit(:current_password, :password)
  end

end
