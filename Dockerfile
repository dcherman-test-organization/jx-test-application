FROM node:10-alpine

ENV PORT 8080
EXPOSE 8080

COPY . /opt

WORKDIR /opt
CMD ["yarn", "start"]
