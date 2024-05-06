#!/bin/bash
curl --header "Content-Type: application/json" --request POST -d '{ "description" : "essen"}' http://localhost:3001/todo
curl --header "Content-Type: application/json" --request POST -d '{ "description" : "fahren"}' http://localhost:3001/todo
curl --header "Content-Type: application/json" --request POST -d '{ "description" : "lernen"}' http://localhost:3001/todo
curl --header "Content-Type: application/json" --request POST -d '{ "description" : "tanzen"}' http://localhost:3001/todo
curl -X "DELETE" localhost:3001/todo/2
curl localhost:3001/todo
#test put
curl --header "Content-Type: application/json" --request PUT -d '{"description" : "staubsaugen"}' http://localhost:3001/todo/1

curl localhost:3001/todo