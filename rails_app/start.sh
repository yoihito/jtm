#!/bin/bash
cd app
rm tmp/pids/server.pid
export DEV_POSTGRES_IP=postgres
export DEV_POSTGRES_USER=postgres
bundle install
bin/rake db:setup
bin/rake db:migrate
bin/rake db:seed
rails s
