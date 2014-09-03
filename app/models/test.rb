class Test < ActiveRecord::Base
	has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	translates :title,:description
	has_and_belongs_to_many :slides
	accepts_nested_attributes_for :slides
	belongs_to :author, polymorphic: true
	has_many :user_answers
	has_many :users, through: :user_answers
	has_and_belongs_to_many :voters, class_name: "User"

	def is_passed?(current_user)
	  if current_user
      	self.user_answers.where(user_id: current_user.id).count > 0
   	  else 
   	  	false
   	  end
	end

	def upvote(current_user)

	  if current_user and self.voters.where(id: current_user.id).count == 0 
	  	self.voters<<current_user
	  	self.rating=self.rating.next
	    self.save
	    true
	  else 
	  	false
	  end
	end

	def downvote(current_user)
	  if current_user and self.voters.where(id: current_user.id).count == 0 
	  	self.voters<<current_user
      	self.rating=self.rating.pred
	  	self.save
	  	true
	  else
	  	false
	  end
	end

end
