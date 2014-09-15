require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    config.generators do |g|
        g.stylesheets = false
        g.javascripts = false
        g.helper = false
        g.test_framework :rspec
    end
    config.middleware.use Rack::ContentLength

  end
end
