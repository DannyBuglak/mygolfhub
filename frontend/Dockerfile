# Use the official Node.js image from the Docker Hub
FROM node:14

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json into the container at /app
COPY package*.json /src/

# Install any dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . /src/

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
