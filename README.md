# Easy Ecomm
Build Amazon Application using Micro services architecture.

To more infos, see `docs/ArchitectureInfos.pdf`, [here](docs/ArchitectureInfos.pdf).

![arquitetura](/application/easy-ecomm/docs/arch.png)

## CI

#### Flow

![arquitetura](/application/easy-ecomm/docs/ci:cd_flow.png)

### Tests

1. Tests Front -  `.github/workflows/test.yml`.
2. Tests Back - `.github/workflows/test_product_microservice.yml`.

#### E2E
 ```sh 
npm run cypress:run
 ```

### Deploys

#### Docker Image

Image name:
> viniciuskomninakis/easy-ecomm#latest

In CI we deploy, here:

1. `.github/workflows/docker-publish.yml`

## Setup

### Prerequisite

> Docker

> Node >= 14 (to run locally - without docker)

To install all project, follow these steps:

1. ./scripts/start-kafka.sh
2. ./scripts/create-topics.sh
3. ./scripts/run-daemons.sh

#### Warning

If step `3` fails, please try:

1. ```cd ./microservices/Fiap-favorites-services && docker-compose run -d mysql nodejs ```
2. ``` cd ./microservices/Fiap-order-services && docker-compose run -d mysql nodejs ```
3. ``` cd ./microservices/Fiap-product-services && docker-compose run -d mysql nodejs ```
4. ```cd ./microservices/Fiap-report-services && docker-compose run -d mysql nodejs ```
5. ``` cd ./microservices/Fiap-shipping-services && docker-compose run -d mysql nodejs ```

Or follow each micro service README.

## Run Front End

Running locally:

```sh
cd application/easy-ecom
yarn
yarn dev
```
## Run Backend - migrations

### Inside each ./microservices

Inside docker or with mysql configured in you machine, run:

> `./node_modules/knex/bin/cli.js migrate:latest --esm`

## Run seeds

### Inside each ./microservices

Inside docker or with mysql configured in you machine, run:

> `./node_modules/knex/bin/cli.js seed:run --esm`

## Technologies - Micro Services

1. 🛠 - Javascript - Programming language
2. 🚀 - Express - Server framework
4. 📦 - Mysql - Data base/Repository
3. ⚙️ - knex - ORM for mysql
4. ⚒️ - node-rdkafka - Kafka abstraction lib
5. ✉️ - AVSC - Buffer parser
6. 🔮 - Node-config - Configuration file lib (from environment and yml)
7. 🧨 - Opossum - Lib for Circuit breaker

## Technologies - Front-end

1. 🛠 - Javascript - Programming language
2. 🚀 - NextJs - Server & React framework
3. ⚒️  - Styled Components - CSS-IN-JS Lib
4. ⚙️ - Antd - Grid Style system
