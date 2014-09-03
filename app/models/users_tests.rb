class UsersTests < ActiveRecord::Base
	belongs_to :user
	belongs_to :test
end
