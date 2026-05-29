---
date: '2021-07-01'
title: 'Rabbitmq Microservice implementation'
github: 'https://github.com/Preshy-Jones/bodsquare-test'
tech:
  - Java
  - Spring Boot
  - MySQL
  - RabbitMQ
  - WebSockets
company: ''
showInProjects: true
---

This is a robust backend architecture employing the use of RabbitMQ to allow users to create background tasks and save them to a database. This application consists of two Java Spring Boot microservices. The first service is the "task requesting service" which is responsible for receiving the tasks from the user and publishing them to the RabbitMQ exchange. The second service is the worker service which consumes the tasks from the queue and saves them to the database. These two services communicate asynchronously via message queues, demonstrating scalable job processing.
