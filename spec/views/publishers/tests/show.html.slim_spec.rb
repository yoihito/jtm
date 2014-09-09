require 'rails_helper'

RSpec.describe "publishers/tests/show", :type => :view do
  before(:each) do
    @publishers_test = assign(:publishers_test, Publishers::Test.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
