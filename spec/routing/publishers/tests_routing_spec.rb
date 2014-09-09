require "rails_helper"

RSpec.describe Publishers::TestsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/publishers/tests").to route_to("publishers/tests#index")
    end

    it "routes to #new" do
      expect(:get => "/publishers/tests/new").to route_to("publishers/tests#new")
    end

    it "routes to #show" do
      expect(:get => "/publishers/tests/1").to route_to("publishers/tests#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/publishers/tests/1/edit").to route_to("publishers/tests#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/publishers/tests").to route_to("publishers/tests#create")
    end

    it "routes to #update" do
      expect(:put => "/publishers/tests/1").to route_to("publishers/tests#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/publishers/tests/1").to route_to("publishers/tests#destroy", :id => "1")
    end

  end
end
