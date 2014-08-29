#!/bin/bash
docker stop rails
docker rm rails
docker run -d -p 5000:3000 --name rails -v $(pwd)/../:/rails_app -w="/rails_app" --link postgres:postgres  yoihito/rails:latest ./docker_scripts/startup.sh
