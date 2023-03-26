# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the send_data_to_api.js script to the working directory
COPY send_data_to_api.js ./

# Set the entrypoint for the container
ENTRYPOINT ["node", "send_data_to_api.js"]
