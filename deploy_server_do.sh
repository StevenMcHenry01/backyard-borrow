#! /bin/bash
yarn build:server
docker build -t stevenmchenry01/backyard-borrow:latest .
docker push stevenmchenry01/backyard-borrow:latest
ssh root@64.225.118.109 "docker pull stevenmchenry01/backyard-borrow:latest && docker tag stevenmchenry01/backyard-borrow:latest dokku/backyard-borrow:latest && dokku tags:deploy backyard-borrow latest"