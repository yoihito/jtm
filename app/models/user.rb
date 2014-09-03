class User < ActiveRecord::Base
  ROLES = %w[user admin root]
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :tests, as: :author
  has_many :users_tests
  has_many :passed_tests, through: :user_answers, class_name: "Test"

  def roles=(roles)
  	self.roles_mask = (roles & ROLES).map { |r| 2**ROLES.index(r) }.inject(0, :+)
  end

  def roles
  	ROLES.reject do |r|
  		((roles_mask.to_i || 0) & 2**ROLES.index(r)).zero?
  	end
  end

  def is?(role)
  	roles.include?(role.to_s)
  end



end
