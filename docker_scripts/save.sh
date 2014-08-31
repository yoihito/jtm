#!/bin/bash
docker commit rails yoihito/rails:latest
docker stop rails
docker rm rails 
