# FuelTrack Backend

Este é o backend do projeto FuelTrack, uma aplicação para rastreamento e gerenciamento de consumo de combustível de veículos.

## Descrição

O backend é desenvolvido em Node.js com o framework NestJS e utiliza o banco de dados MongoDB para armazenar dados relacionados a usuários, veículos e registros de reabastecimento. Ele fornece uma API RESTful para interação com o frontend e possui endpoints para autenticação de usuários, gerenciamento de veículos e registros de reabastecimento.

## Funcionalidades Principais

- Autenticação de usuários via Google OAuth2
- CRUD (Create, Read, Update, Delete) de usuários
- CRUD de veículos
- CRUD de registros de reabastecimento
- Validação de dados de entrada utilizando DTOs (Data Transfer Objects)
- Gerenciamento de dependências utilizando npm e Yarn

## Instalação e Configuração

1. Clone o repositório: `git clone https://github.com/seu-usuario/fueltrack-backend.git`
2. Instale as dependências: `npm install` ou `yarn install`
3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto. Você pode usar `.env.example` como referência.
4. Inicie o servidor: `npm start` ou `yarn start`
5. O servidor estará disponível em `http://localhost:3000` por padrão.

## Endpoints da API

A API expõe os seguintes endpoints:

- `/auth/google`: Endpoint para autenticação via Google OAuth2.
- `/users`: Endpoint para CRUD de usuários.
- `/vehicles`: Endpoint para CRUD de veículos.
- `/refuels`: Endpoint para CRUD de registros de reabastecimento.

Para obter mais detalhes sobre cada endpoint, consulte a documentação da API ou os arquivos de rota e controlador do projeto.

## Tecnologias Utilizadas

- Node.js
- NestJS
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Google OAuth2
- npm
- Yarn

## Autor

Davi Taveira <a target="_blank" href="https://github.com/xtaveira">GITHUB</a>

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests, relatar problemas ou sugerir novas funcionalidades.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
