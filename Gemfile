source 'https://rubygems.org'


gem 'rails', '~> 4.1.4'
gem 'pg', '~> 0.17.1'
gem 'devise', '~> 3.2.4'
gem 'cancancan', '~> 1.9.2'
gem 'jquery-rails'
gem 'bourbon', '~> 4.0.2'
gem 'redis-rails', '~> 4.0.0'
gem 'jbuilder', '~> 2.0'
gem 'nokogiri', '~> 1.6.1'
gem 'globalize'
gem 'paperclip'
gem 'simple_form'
gem 'uglifier'
gem 'execjs'

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'thin'
  gem 'guard-livereload'
  gem 'quiet_assets'
  gem 'slim-rails'
  gem 'autoprefixer-rails'
  gem 'capistrano'
  gem 'capistrano-puma', require: false
  gem 'capistrano-rails',   '~> 1.1', require: false
  gem 'capistrano-bundler', '~> 1.1', require: false
  gem 'capistrano-rvm',   '~> 0.1', require: false
end

group :test, :development do
  gem 'pry-byebug'
  gem 'rspec-rails', '~> 3.0.0'
  gem 'faker', '~> 1.4.2'
  gem 'konacha', '~> 3.2'
end

group :test do
#  gem 'capybara', '~> 2.3.0'
#  gem 'capybara-webkit', '~> 1.2.0'
  gem 'fabrication', '~> 2.11.3'
  gem 'launchy', '~> 2.4.2'
  gem 'simplecov', '~> 0.9.0', :require => false
end

group :production do
  gem 'rails_12factor'
  gem 'unicorn'
end

gem 'sdoc', '~> 0.4.0',          group: :doc
