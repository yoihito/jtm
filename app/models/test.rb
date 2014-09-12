class Test < ActiveRecord::Base
	has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	translates :title,:description
	has_and_belongs_to_many :slides
	accepts_nested_attributes_for :slides, reject_if: proc { |attribute| attribute['question'].blank?}
	belongs_to :author, polymorphic: true
	has_many :user_answers
	has_many :users, through: :user_answers
	has_many :ratings

	has_many :voters, through: :ratings, source: :user, class_name: "User"

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
			self.author.title
		else
			'noname'
		end
	end

	def upvote(user)
	  update_rating(user,1)
	  refresh_rating
	end

	def downvote(user)
	  update_rating(user,0)
	  refresh_rating
	end
private

	def refresh_rating
	  self.rating=self.ratings.average(:value)*5
	  self.save
	end

	def update_rating(user,value)
	  rating = Rating.where(test_id: self.id, user_id: user.id).take
	  if rating.nil?
	  	self.ratings<<Rating.new(test_id: self.id, user_id: user.id, value: value)
	  else 
	  	rating.value=value
	  	rating.save
	  end
	end

end
