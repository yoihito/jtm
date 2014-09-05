class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  def show

  end

  def edit
  	
  end

  def update
  	@user.update(user_params)
  end

private

  def set_user
  	@user = User.find(params[:id])
  end

  def user_params
  	params.require(:user).permit(:name, :gender, :birthday, :password)
  end

end
