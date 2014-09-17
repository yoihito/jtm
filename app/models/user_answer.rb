class UserAnswer < ActiveRecord::Base
	belongs_to :user, class_name: "User"
	belongs_to :test, class_name: "Test", inverse_of: :user_answers
  scope :test_by_user, ->(test_id, user_id) { where("test_id = ? and user_id = ?",test_id,user_id) }
  validate :answers_count

  def answers_count
    answers = self.answers
    #Rails.logger.debug "#{answers.inspect}"
    unless answers.size == self.test.slides.size
      errors.add(:too_much,'Too much answers')
    end

  end

end
