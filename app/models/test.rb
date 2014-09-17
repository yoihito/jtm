require 'statistics2'
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
	has_many :ratings, as: :entity
	has_many :voters, through: :ratings, source: :user, class_name: "User"
	has_many :comments, -> { order('created_at DESC') }, as: :entity, dependent: :delete_all

  scope :popular, -> { order('rating desc') }
  scope :not_passed, -> (user){ where('id not in (?)', user.user_answers.map{|x| x.test_id}) }



	def slides_count_limit
		errors.add(:too_much,'Too much slides. Max count is 10') if slides.size>10
    errors.add(:too_low,'Too low slides. Min count is 1') if slides.size<1
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
    Test.transaction do
	    update_rating(user,1)
	    refresh_rating
    end
	end

	def downvote(user)
    Test.transaction do
      update_rating(user,0)
	    refresh_rating
    end
	end

  def upvoted?(user)
    rate = Rating.where(entity: self, user_id: user.id).take
    !rate.nil? && rate.value==1
  end

  def downvoted?(user)
    rate = Rating.where(entity: self, user_id: user.id).take
    !rate.nil? && rate.value==0
  end

	def comments_count
		self.comments.count
	end

private

  def ci_lower_bound(pos, n, confidence)
    if n == 0
        return 0
    end
    z = Statistics2.pnormaldist(1-(1-confidence)/2)
    phat = 1.0*pos/n
    (phat + z*z/(2*n) - z * Math.sqrt((phat*(1-phat)+z*z/(4*n))/n))/(1+z*z/n)
  end

	def refresh_rating
	  new_rating_val = ci_lower_bound(self.ratings.sum(:value),self.ratings.size,0.95)*5
    Rails.logger.debug "#{new_rating_val.inspect}"
    self.update_attribute(:rating, new_rating_val)
    Rails.logger.debug "#{self.inspect}"
	end

	def update_rating(user,value)
	  rating = Rating.where(entity: self, user_id: user.id).take
	  if rating.nil?
	  	rating = Rating.new(user_id: user.id, value: value)
      rating.entity = self
      rating.save
      self.ratings<<rating
	  else
	  	rating.update(value: value)
	  end
	end

end
