require 'rails_helper'

RSpec.describe "publishers/tests/edit", :type => :view do
  before(:each) do
    @publishers_test = assign(:publishers_test, Publishers::Test.create!())
  end

  it "renders the edit publishers_test form" do
    render

    assert_select "form[action=?][method=?]", publishers_test_path(@publishers_test), "post" do
    end
  end
end
