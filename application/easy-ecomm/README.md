## Getting Started

Primeiro, rode os micro serviços! é só seguir o README.md, (aqui)[../microservices/README.md].

Ou tentar diretamente daqui:

```bash
cd ../microservices
./scripts/start-kafka.sh
./scripts/create-topics.sh
./scripts/run-daemons.sh
```

Segundo, rode o servidor em desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:8080](http://localhost:38080) no browser para ver o resultado!.

### Rotas

- `/` => É a página inicial, explicação do App e todos os links para demais páginas.
- `/search/:param` => É a página de busca, onde `:param` é um texto simples para pesquisa.
- `/category/:id` => É a página de filtros por categoria, onde `:id` é a o ID da categoria para filtragem.


## Guide

### Components

Desenvolva seus Componentes em: `./src/components`. E os utilize nás páginas.
Não esqueça de exporta-los: `./src/components/index.js`;

### Pages & Container

Os containers, `./src/containers`, contém toda a lógica de negócio para as páginas, juntando todas as pequenas partes do nosso sistema (componentes e serviços).

### Serviços

Adicione a integração com um <i>Microservice</i> na parte de `./src/services`, onde ficam todas as interações externas e que podem ser fácilmente mudadas.

