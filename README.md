# news-website
 
To build the Docker image for your app, open a terminal in the root directory of your project and run the following command:

docker build -t news-website .

This will build a Docker image named news-website using the Dockerfile in the current directory (.). Once the image is built, you can run the Docker container using the docker run command:

docker run -p 3000:3000 news-website

This will start the container and forward traffic from port 3000 in the container to port 3000 on your local machine. You can then access your Koa application by visiting http://localhost:3000 in your web browser.

With this setup, when you run the Docker container, you can pass the MONGODB_URL environment variable to the container using the -e flag:

docker run -p 3000:3000 -e MONGODB_URL=mongodb://mongo:27017/news-app my-news-app
