class User < ActiveRecord::Base
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  ROLES = %w[user admin root]
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :tests, as: :author
  has_many :user_answers
  has_many :passed_tests, through: :user_answers, source: :test
  has_and_belongs_to_many :voted_tests, class_name: "Test"

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
