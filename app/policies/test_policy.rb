class TestPolicy < ApplicationPolicy

	def show?
		own_publisher?
	end

	def create?
		own_publisher?
	end

	def update?
		own_publisher?
	end

	def destroy?
		own_publisher?
	end

  def save?

  end

  def get?
    true
  end

  def result?
  end

private

	def own_publisher?
		@scope.author.owners.exists?(@user)
	end

end
