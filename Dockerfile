# Dockerfile for a Node.js application
FROM node:22-alpine
# Set the working directory in the container
WORKDIR /torung/tronfit-FE
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

#docker build -t tronfit-fe .
#docker run -d -p 3000:3000 tronfit-fe