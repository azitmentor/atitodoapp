FROM node:16 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install -g @angular/cli@14
COPY . /app
RUN echo export class MyVersion { public static readonly number = \'`date`\' }>src/app/my-version.ts
RUN ng build --configuration production
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
