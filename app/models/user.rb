class User < ApplicationRecord
  # include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :recoverable, :jwt_authenticatable, jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null

  validates :name, presence: true

  def to_json(arg)
    arg[:only] = [:name, :email]
    super(arg)
  end
end
