require 'rails_helper'

RSpec.describe "publishers/tests/index", :type => :view do
  before(:each) do
    assign(:publishers_tests, [
      Publishers::Test.create!(),
      Publishers::Test.create!()
    ])
  end

  it "renders a list of publishers/tests" do
    render
  end
end
