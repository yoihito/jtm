class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  def show

  end

  def edit

  end

  def update
  	@user.update_with_password(user_params)
  	sign_in @user, :bypass => true
  	render :edit
  end

private

  def set_user
  	@user = User.find(params[:id])
  end

  def user_params
  	params.require(:user).permit(:name, :current_password, :password, :language)
  end

end
