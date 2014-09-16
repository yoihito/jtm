class UserAnswer < ActiveRecord::Base
	belongs_to :user, class_name: "User"
	belongs_to :test, class_name: "Test", inverse_of: :user_answers
  validate :answers_count

  def answers_count
    answers = self.answers
    unless answers.size == self.test.size
      errors.add(:too_much,'Too much answers')
    end

  end

end
