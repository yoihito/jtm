require 'rails_helper'

RSpec.describe "publishers/tests/new", :type => :view do
  before(:each) do
    assign(:publishers_test, Publishers::Test.new())
  end

  it "renders new publishers_test form" do
    render

    assert_select "form[action=?][method=?]", publishers_tests_path, "post" do
    end
  end
end
