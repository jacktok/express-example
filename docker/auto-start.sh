#!/usr/bin/env bash
docker stop $(docker ps -q)
docker-compose -p express-example-network down

echo "building postgres image."
./build.sh

docker-compose -p express-example-network up
