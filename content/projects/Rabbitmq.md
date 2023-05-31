---
date: '2021-07-01'
title: 'Rabbitmq Microservice implementation'
github: 'https://github.com/Preshy-Jones/bodsquare-test'
tech:
  - Node.js
  - Express
  - Mysql
  - Rabbitmq
  - Socket.io
company: ''
showInProjects: true
---

This is a backend server employing the use of a Rabbitmq microservice tool to allow users to create tasks and save them to a database, this application consists of two services each consisting of a nodejs application. The first service is the "task requesting service" which is responsible for receing the tasks from the user and publishing themm to the rabbitmq queue, the second service is the worker service which is responsible for consuming the tasks from the queue and saving them to the database. These two services communicate with each other using socker.io, the task requesting service emits an event to the worker service and the worker service listens to the event and consumes the task from the queue.
