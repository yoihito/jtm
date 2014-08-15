#!/bin/bash
cd app
rm tmp/pids/server.pid
bundle install
rails s
