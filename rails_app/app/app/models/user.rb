class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :tests, as: :author
  has_many :user_answers
  has_many :passed_tests, through: :user_answers, class_name: "Test"
end
