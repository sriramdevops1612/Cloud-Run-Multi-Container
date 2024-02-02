FROM node:20.10.0-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
ENV PORT=8080
CMD [ "npm", "start" ]
