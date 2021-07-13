class Api::UsersController < ApplicationController
  def create
    @user = User.create(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def new
    @user = User.new
    render :new
  end


  def show
    @user = User.find(params[:id])
    render :show
  end

  def edit
    @user = User.find(params[:id])
    render :edit                         
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: @user.errors.full_messages, status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def delete
    @user = User.find(params[:id])

    if @user 
      @user.destroy
      render :show
    else
      render['Could not find user']
    end
  end

  def index 
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
