FROM node:18.17.0-buster

# installation required packages
RUN apt-get update && apt-get install -y ssh git python python3 build-essential

RUN mkdir -p /opt/src
RUN mkdir -p /opt/dumps

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "tsconfig.json", "/opt/"]
WORKDIR /opt
RUN npm install
# RUN npm install --only=production --force

COPY ./src /opt/src
