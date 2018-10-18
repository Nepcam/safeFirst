class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { stats: ['some stats']}
  end
end
