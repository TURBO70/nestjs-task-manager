<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
 
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
This project is a task management application built with NestJS, a progressive Node.js framework. It includes user authentication with JWT (JSON Web Tokens) integration, task CRUD operations, and uses TypeORM for database management. The application structure follows best practices for scalable and maintainable code.

## Features
- **Authentication:** Secure user sign-up and sign-in using JWT authentication.
- **Task Management:** CRUD operations for tasks including creation, retrieval, update, and deletion.
- **TypeORM Integration:** ORM (Object-Relational Mapping) integration for seamless database operations.
- **Middleware and Interceptors:** Utilizes NestJS middleware for request processing and interceptors for data transformation.
- **Validation and Error Handling:** Input validation using class-validator and centralized error handling.
- **Testing:** Includes a structured test folder for unit and integration testing.
- **Configuration:** Configuration management using NestJS ConfigModule with environment variables.
- **Linting and Formatting:** ESLint configuration for code linting and Prettier for code formatting.

## 💻Technologies Used
- NestJS
- TypeScript
- TypeORM
- JWT (JSON Web Tokens)
- PostgreSQL (or your preferred database)
- passport
- ESLint


## Project Structure
 ```powershell
./
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── auth-credentials.dto.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── get-user.decorator.ts
│   │   ├── jwt-payload.interface.ts
│   │   ├── jwt.strategy.ts
│   │   ├── user.entity.ts
│   │   └── user.repository.ts
│   ├── tasks/
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts
│   │   │   ├── get-tasks-filter.dto.ts
│   │   │   └── update-task-status.dto.ts
│   │   ├── task-status.enum.ts
│   │   ├── task.entity.ts
│   │   ├── tasks.controller.ts
│   │   ├── tasks.module.ts
│   │   ├── tasks.repository.ts
│   │   └── tasks.service.ts
│   ├── app.module.ts
│   ├── config.schema.ts
│   ├── main.ts
│   ├── transform.interceptor.ts
│   └── test/
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── nest-cli.json
├── package-lock.json
└── package.json


```
## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

