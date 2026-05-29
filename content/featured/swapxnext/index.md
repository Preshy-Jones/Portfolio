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

A cryptocurrency-to-fiat exchange where users deposit Bitcoin, Ethereum, BSC, Polygon, Tron, or Solana and receive Nigerian Naira or USD payouts via bank transfer. As the Lead Backend Engineer, I built the Spring Boot backend handling user onboarding, KYC verification, crypto wallet management, transaction processing, fiat settlement, and notification delivery.

To ensure strict financial correctness, I implemented idempotent payment webhook processing with a PostgreSQL unique constraint deduplication table, verifying provider events before any financial mutation. I achieved atomic wallet balance updates inside Spring `@Transactional` contexts using row-level locking, and designed an append-only transaction ledger with Hibernate and Flyway-managed schema for complete auditability.

I engineered robust background processing using RabbitMQ and Redis. This includes asynchronous workers polling blockchain APIs for deposit detection, fiat settlement processing, and KYC document handling with multi-provider failover between SmileID and Dojah. I also automated scheduled reconciliation jobs to detect discrepancies between internal records and Paystack/Monnify provider statements.

For event-driven processing, I utilized AWS SQS for async payment event handling between services with idempotent consumers and dead-letter queue monitoring. I implemented the Outbox pattern on all cross-service event publications, guaranteeing reliable event delivery and ensuring no events are lost during service restarts.
