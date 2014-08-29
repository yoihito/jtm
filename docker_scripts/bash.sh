#!/bin/bash
docker run -t -i -p 5000:3000 -v $(pwd)/../:/rails_app --name rails --link postgres:postgres yoihito/rails /bin/bash
docker rm rails
