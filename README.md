# News-Api

A simple web application for managing news articles.

## Requirements

* Node.js
* MongoDB

## Usage
Once the application is running, you can access it by visiting http://localhost:3000 in your web browser.

## API Endpoints
The following endpoints are available:

* GET /news - Get a list of news articles
* POST /news - Create a new news article
* GET /news/:id - Get a specific news article
* PUT /news/:id - Update a specific news article
* DELETE /news/:id - Delete a specific news article

## API Documentation

### Get News
Retrieve a list of news articles.
```
GET http://localhost:3000/news
```
### Get News with Custom Query

endpoint is used to fetch all news articles from the database. 
It accepts several query parameters that can be used to customize the returned results:

* sortBy: the field to sort the results by (e.g. title, createdAt, etc.)
* sortOrder: the sort order, which can be either asc (ascending) or desc (descending)
* keyword: a keyword to search for in the news article's title or body
* page: the page number to fetch (e.g. 1, 2, etc.)
* pageSize: the number of news articles to fetch per page

returns a response containing the requested news articles and the total count of articles matching the query.

Here is an example of how to call this endpoint:
```
GET 'http://localhost:3000/news?sortBy=title&sortOrder=asc&keyword=breaking&page=1&pageSize=10' 
```

This would fetch the first page of news articles containing the keyword "breaking",
sorted by title in ascending order, with a page size of 10 articles per page.

### Create News

Create a new news article.
```
POST http://localhost:3000/news
Content-Type: application/json
{
  "title": "News Title",
  "shortDescription": "News Description",
  "text": "Text..."
}
```
### Get News Article
Retrieve a single news article by ID.
```
GET http://localhost:3000/news/:id
```
### Update News Article
Update a single news article by ID.
```
PUT http://localhost:3000/news/:id
Content-Type: application/json
{
  "title": "Updated News Title",
  "shortDescription": "Updated News Description",
  "text": "UPDATED Text...."
}
```
### Delete News Article
Delete a single news article by ID.
```
DELETE http://localhost:3000/news/:id
```

## to Test the News Api with the REST Client extension: 

the ./rest.http file is used with the REST Client extension for VS Code to Quicly test the DataBase
----------------
## Setup
To set up this application, follow these steps:

1. Clone the repository:

```
git clone https://github.com/<username>/news-website-app.git
```
2. Navigate to the project directory:

```
cd news-website-app
```
3. Create a new file named .env in the project directory, and add the following line:

```
MONGODB_URI=mongodb://db:27017/news-app
```
This environment variable specifies the URI of the MongoDB database.

4. Run the following command to start the application:

```
docker-compose up --build
```
This command will build and start the application containers.
  ------------------------
## to Build with Docker: 

To build the Docker image for your app, open a terminal in the root directory of 
your project and run the following command ( it's important to keep the dot "." at the end ):
```
docker build -t news-api .
```
This will build a Docker image named news-api using the Dockerfile in the current directory (.). 
Once the image is built, you can run the Docker container using the docker run command:
```
docker-compose up
```
Congrats now you got a running container Docker Stack of two containers 
"db-1" and "app-1".

## Setup 2

1. Clone the repository:
```
git clone https://github.com/instamenta/news-website.git
```
2. Install dependencies:
```
cd news-app
```
```
npm install
```
3. Create a .env file in the root directory with the following content:
```
MONGODB_URI=mongodb://localhost:27017/news-app
PORT=3000
```
Note: Change the MONGODB_URI value to the appropriate MongoDB connection string if necessary.

4. Seed the database with sample data:
```
npm run seed
```
## Start
To start the application, run:
```
node ./app.js
```
## Test

To run the test suite for this application, follow these steps:

1. Start the application containers:
```
docker-compose up --build
```

2. Open a new terminal window and navigate to the project directory:
```
cd news-website-app
```
3. Run the following command to execute the test suite:
```
docker-compose run app npm test
```
This command will start a new container and run the test suite inside it.


## Troubleshooting
If you encounter any issues while running this application, try the following steps:

* Make sure that Docker and Docker Compose are installed and running correctly on your computer.
* Check the application logs for any error messages or stack traces.
* Try stopping and restarting the application containers using the `docker-compose down` and `docker-compose up`
