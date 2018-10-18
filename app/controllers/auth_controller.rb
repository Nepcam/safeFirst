class AuthController < Devise::SessionsController
  def create
    super { |resource| @resource = resource }
  end
end
