#!/bin/bash
docker run -t -i -v $(pwd)/rails_app:/rails_app --name rails yoihito/rails /bin/bash
docker rm rails
