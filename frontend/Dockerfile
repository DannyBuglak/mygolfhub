# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application in development mode with hot reloading
CMD ["npm", "start"]




# # Use the official Node.js image
# FROM node:14

# # Set the working directory
# WORKDIR /src

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Expose the port
# EXPOSE 3000

# # Start the application
# CMD ["npm", "run", "start"]
