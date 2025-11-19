FROM node:20-alpine
WORKDIR /az204/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
