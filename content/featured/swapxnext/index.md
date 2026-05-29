---
date: '1'
title: 'SwapXNext'
cover: './swapxnext.png'
external: 'https://swapxnext.com/'
tech:
  - Java
  - Spring Boot
  - PostgreSQL
  - Hibernate
  - RabbitMQ
  - Redis
  - AWS SQS
  - Flyway
---

A cryptocurrency-to-fiat exchange providing users with instant fiat payouts. As the Lead Backend Engineer, I built the robust Spring Boot architecture handling KYC, crypto wallets, transaction processing, and fiat settlements.

I ensured strict financial correctness using atomic wallet updates with Spring `@Transactional`, PostgreSQL deduplication for webhooks, and an append-only ledger via Hibernate. Additionally, I engineered a highly scalable event-driven system leveraging RabbitMQ, AWS SQS, and the Outbox pattern for asynchronous background jobs, KYC failovers, and reliable payment event processing.
