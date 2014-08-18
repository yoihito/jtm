#!/bin/bash
cd app
rm tmp/pids/server.pid
export DEV_POSTGRES_IP=172.17.0.11
export DEV_POSTGRES_USER=postgres
bundle install
bin/rake db:setup
bin/rake db:migrate
rails s
