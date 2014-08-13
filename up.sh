#!/bin/bash
docker stop rails
docker rm rails
docker run -d -p 5000:3000 --name rails -v $(pwd)/rails_app:/rails_app -w="/rails_app" yoihito/rails:latest ./start.sh
