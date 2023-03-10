# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Copy the config.js file into the container
COPY config.js .

# Set the environment variable for the MongoDB connection URL
ENV MONGODB_URL mongodb://mongo:27017/news-app
# /news-app

# Expose the port that the application listens on (default is 3000)
EXPOSE 3000

# Start the application
CMD [ "node", "./app.js" ]