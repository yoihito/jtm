class UserAnswer < ActiveRecord::Base
	belongs_to :user, class_name: "User"
	belongs_to :test, class_name: "Test"
end
