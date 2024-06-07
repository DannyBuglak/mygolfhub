# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libmariadb-dev-compat \
    libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy requirements.txt into the container at /app
COPY requirements.txt /app/

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_RUN_HOST=0.0.0.0

# Run the application
CMD ["flask", "run"]




# # Use the official Python image from the Docker Hub
# FROM python:3.9-slim

# # Install system dependencies
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     pkg-config \
#     libmariadb-dev-compat \
#     libmariadb-dev \
#     && rm -rf /var/lib/apt/lists/*

# # Set the working directory
# WORKDIR /app

# # Copy requirements.txt into the container at /app
# COPY requirements.txt /app/

# # Install any dependencies
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the rest of the application code into the container
# COPY . /app/

# # Expose the port the app runs on
# EXPOSE 5000

# # Define environment variable
# ENV FLASK_APP=app.py
# ENV FLASK_ENV=development
# ENV FLASK_RUN_HOST=0.0.0.0

# # Run the application
# CMD ["flask", "run"]
