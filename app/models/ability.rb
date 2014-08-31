class Ability
  include CanCan::Ability

  def initialize(user)
    @user ||= User.new
    @user.roles.each { |role| send(role) }

    send(:guest) if @user.roles.empty?

  end

  def guest
    
  end

  def user

  end

  def admin
    
  end

  def root
    can :access, :all
  end

end
