#!/bin/bash
docker run -t -i -v $(pwd)/rails_app:/rails_app --name rails --link postgres:postgres yoihito/rails /bin/bash
docker rm rails
