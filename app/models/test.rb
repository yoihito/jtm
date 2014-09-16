class Test < ActiveRecord::Base
	has_attached_file :picture, styles: { retina_medium: "560x3200>", medium: "280x3200>"}, default_url: ':style/missing.png'
	validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
	validates_attachment_file_name :picture, :matches => [/png\Z/, /jpe?g\Z/, /gif\Z/]
	validates_attachment :picture, size: { in: 0..1500.kilobytes}
	validate :slides_count_limit
	validates :title, :picture, presence: true


  translates :title,:description

	has_and_belongs_to_many :slides
  accepts_nested_attributes_for :slides, reject_if: proc { |attribute| attribute['question'].blank? && attribute['picture'].blank? }
	belongs_to :author, polymorphic: true
  belongs_to :publisher, class_name: 'Publisher', foreign_key: :author_id
	has_many :user_answers, dependent: :delete_all, inverse_of: :test
	has_many :users, through: :user_answers
	has_many :ratings, dependent: :delete_all
	has_many :voters, through: :ratings, source: :user, class_name: "User"
	has_many :comments, -> { order('created_at DESC') }, as: :entity, dependent: :delete_all



	def slides_count_limit
		if slides.size>10
			errors.add(:too_much,'Too much slides. Max count is 10');
		end
	end

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

	def comments_count
		self.comments.count
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
