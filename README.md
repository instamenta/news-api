# News-Api

A simple web application for managing news articles.


## Requirements
* Node.js
* MongoDB


## to Build the Docker: 

To build the Docker image for your app, open a terminal in the root directory of 
your project and run the following command ( it's important to keep the dot "." at the end ):

docker build -t news-api .

This will build a Docker image named news-api using the Dockerfile in the current directory (.). 
Once the image is built, you can run the Docker container using the docker run command:

docker-compose up

Congrats now you got a running container Docker Stack of two containers 
"db-1" and "app-1".


## to Test the News Api:

the ./rest.http file is used with the REST Client extension for VS Code to Quicly test the DataBase

### Get News
GET http://localhost:3000/news

### Create News
POST http://localhost:3000/news
Content-Type: application/json

{
"title": "News Title",
"shortDescription": "News Description",
"text": "Text"
}

### Get Single News
GET http://localhost:3000/news/:id

### Update News
PUT http://localhost:3000/news/:id
Content-Type: application/json
{
"title": "Updated News Title",
"shortDescription": "Updated News Description",
"text": "UPDATED Text"
}

### Delete News
DELETE http://localhost:3000/news/:id