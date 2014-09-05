class Test < ActiveRecord::Base
	has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	translates :title,:description
	has_and_belongs_to_many :slides
	accepts_nested_attributes_for :slides, reject_if: proc { |attribute| attribute['question'].blank?}
	belongs_to :author, polymorphic: true
	has_many :user_answers
	has_many :users, through: :user_answers
	has_and_belongs_to_many :voters, class_name: "User"

	def is_passed?(user)
	  if user

	  	id = self.user_answers.index{ |x| x.user_id == user.id}
	  	id != nil
   	  else 
   	  	false
   	  end
	end

	def users_answered
		self.user_answers.size
	end

	def author_name
		if self.author
			self.author.class_name
		else
			'noname'
		end
	end

	def get_rating
		self.voters.size>0 ? ((self.rating.to_f/self.voters.size)*5).to_i : 0
	end

	def upvote(user, value)
	  if user and self.voters.where(id: user.id).count == 0 
	  	self.voters<<user
	  	self.rating=self.rating.next
	    self.save
	    true
	  else 
	  	false
	  end
	end

	def downvote(user)
	  if user and self.voters.where(id: user.id).count == 0 
	  	self.voters<<user
      	self.rating=self.rating.pred
	  	self.save
	  	true
	  else
	  	false
	  end
	end

end
