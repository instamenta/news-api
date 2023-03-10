WORKDIR /app

# Copy the package files to the Docker image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files to the Docker image
COPY . .

# Expose the port that the app listens on
EXPOSE 3000

# Run the app when the Docker container starts
CMD ["npm", "start"]