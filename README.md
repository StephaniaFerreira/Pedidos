📦 Web API com Node.js, Express, MongoDB e Prisma

🔹 Visão Geral

Este projeto é uma Web API RESTful feita com Node.js e Express, usando MongoDB como banco de dados e Prisma como ORM.
A API permite gerenciar pedidos, oferecendo operações CRUD (Create, Read, Update, Delete).

🔹 Endpoints
Método	Endpoint	Descrição
GET	/orders	Lista todos os pedidos
GET	/orders/:id	Retorna um pedido específico pelo ID
POST	/orders	Cria um novo pedido
PUT	/orders/:id	Atualiza um pedido existente pelo ID
DELETE	/orders/:id	Remove um pedido pelo ID

Use os mappers parseOrder e formatOrderResponse para enviar dados consistentes entre banco e usuário.

🔹 Estrutura do Projeto
.
```
├── controllers/        # Controllers que recebem requisições e chamam serviços
├── services/           # Lógica de negócio e Prisma
├── mappers/            # Funções de formatação de objetos (parse e format)
├── prisma/             # Configuração do Prisma
│   └── schema.prisma   # Schema do Prisma
├── routes/             # Definição das rotas da API
├── server.js           # Ponto de entrada da aplicação
└── package.json        # Dependências e scripts do projeto
```
🔹 Tecnologias
```
Node.js

Express

MongoDB

Prisma

JavaScript (ES6+)
```
🔹 Como Rodar a Aplicação

1️⃣ Clonar o projeto
```
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```
2️⃣ Instalar dependências
```
npm install
```
3️⃣ Configurar MongoDB

Rodando MongoDB como Replica Set

O Prisma precisa do MongoDB como replica set para transações. Faça o seguinte:

Crie a pasta de dados:

```bash
mkdir -p /data/db
```

Inicie o MongoDB como replica set:
```bash
mongod --dbpath /data/db --replSet rs0
```
Abra outro terminal e inicialize o replica set:
```bash
mongosh
> rs.initiate()
```
Verifique se está PRIMARY:
```bash
> rs.status()
```
Configurar .env

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="mongodb://127.0.0.1:27017/nomeDoBanco?replicaSet=rs0"
PORT=3000
4️⃣ Gerar Prisma Client
```bash
npx prisma generate
```
Se precisar, você também pode criar ou atualizar schemas:
```bash
npx prisma db push
```
5️⃣ Iniciar a API
```bash
node server.js
```

Por padrão, a API ficará disponível em:
http://localhost:3000
