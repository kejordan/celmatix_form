class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  # GET /users/new
  def new
    if params['current_partial']
      render :new
    else
      @user = User.new
    end
  end

  # POST /users
  # POST /users.json

  def create
    if !cookies['favorite_color']
      flash[:alert] = 'Please select color before submitting'
      redirect_back(fallback_location: :new)
      return
    end
    user_params = {
      'first_name': cookies['first_name'],
      'last_name': cookies['last_name'],
      'email': cookies['email'],
      'age': cookies['age'],
      'weight': cookies['weight'],
      'height_feet': cookies['height_feet'],
      'height_inches': cookies['height_inches'],
      'favorite_color': cookies['favorite_color']
    }
    @user = User.new(user_params)
    if @user.save
      cookies.delete('first_name')
      cookies.delete('last_name')
      cookies.delete('email')
      cookies.delete('age')
      cookies.delete('weight')
      cookies.delete('height_feet')
      cookies.delete('height_inches')
      cookies.delete('favorite_color')
      render :partial => 'finish'
    else
      render :new, notice: 'USER NOT CREATED!'
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.permit(:first_name, :last_name, :email, :age, :height_feet, :height_inches, :weight, :favorite_color)
    end
end
