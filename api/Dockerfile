FROM node:lts-alpine
WORKDIR /app
COPY ./api/package*.json ./
RUN npm install
RUN npm audit fix; exit 0
COPY ./api/* .
RUN npm run build --prod
ENV NODE_ENV production
EXPOSE 9001