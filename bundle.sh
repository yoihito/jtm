#!/bin/bash
docker commit rails yoihito/rails:latest
./up.sh
./logs.sh
