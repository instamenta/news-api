# News-Api

A simple web application for managing news articles.


## Requirements
* Node.js
* MongoDB

## Setup
1. Clone the repository:

git clone https://github.com/instamenta/news-website.git

2. Install dependencies:

cd news-app
npm install

3. Create a .env file in the root directory with the following content:

MONGODB_URI=mongodb://localhost:27017/news-app
PORT=3000

Note: Change the MONGODB_URI value to the appropriate MongoDB connection string if necessary.

4. Seed the database with sample data:

npm run seed

## Start
To start the application, run:

npm start

## Test
To run tests, run:

npm test

## to Build with Docker: 

To build the Docker image for your app, open a terminal in the root directory of 
your project and run the following command ( it's important to keep the dot "." at the end ):

docker build -t news-api .

This will build a Docker image named news-api using the Dockerfile in the current directory (.). 
Once the image is built, you can run the Docker container using the docker run command:

docker-compose up

Congrats now you got a running container Docker Stack of two containers 
"db-1" and "app-1".


## to Test the News Api with the REST Client extension: 

the ./rest.http file is used with the REST Client extension for VS Code to Quicly test the DataBase

## API Documentation

### Get News
Retrieve a list of news articles.

GET http://localhost:3000/news

### Create News
Create a new news article.

POST http://localhost:3000/news
Content-Type: application/json
{
  "title": "News Title",
  "shortDescription": "News Description",
  "text": "Text..."
}

### Get News Article
Retrieve a single news article by ID.

GET http://localhost:3000/news/:id

### Update News Article
Update a single news article by ID.

PUT http://localhost:3000/news/:id
Content-Type: application/json
{
  "title": "Updated News Title",
  "shortDescription": "Updated News Description",
  "text": "UPDATED BIG TEXT UPDATED BIG TEXT UPDATED BIG TEXT UPDATED BIG TEXT UPDATED BIG TEXT"
}

### Delete News Article
Delete a single news article by ID.

DELETE http://localhost:3000/news/:id