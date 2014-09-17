class UserAnswer < ActiveRecord::Base
	belongs_to :user, class_name: "User"
	belongs_to :test, class_name: "Test", inverse_of: :user_answers
  validate :answers_count

  def answers_count
    answers = self.answers
    #Rails.logger.debug "#{answers.inspect}"
    unless answers.size == self.test.slides.size
      errors.add(:too_much,'Too much answers')
    end

  end

end
