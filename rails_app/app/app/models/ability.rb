class Ability
  include CanCan::Ability

  def initialize(user)
    @user ||= User.new
    @user.roles.each { |role| send(role) }

    send(:guest) if @user.roles.empty?

  end

  def guest
    can :get_slides, Test
    can :get_result, Test
  end

  def user
    guest
    can :save_answers, Test

  end

  def admin
    
  end

  def root
    can :access, :all
  end

end
