# Este foi uma API desenvolvida para um teste em uma empresa chamada Keneer.
## A ideia por tras dessa API era desenvolver um CRUD manipulando dados por meio de um banco de dados SQL e utilizei o #MySQL

## Para utilizar a API o end: https://keneer-produtos.herokuapp.com/

#Endpoints de acesso

- /user/signup
- /user/login

**Signup**
Devera ser fornecido:

- nome
- email
- password

Devera retornar: 

- Mensagem confirmando cadastro
- Token de acesso

**Login**

Devera ser fornecido:

- email
- password

Devera retornar:

- Mensagem confirmando
- Token de acesso

## Endpoint de cadastro

- /products/add(POST)
- /products/all(GET)
- /products/:id(GET)
- /products/:id(DELETE)

**Para adicionar: **

Devera ser fornecido:

- product_name
- photo
- status: ativo(entra como padrao)

Header com:

- Authorization: Token

Devera retornar

- Mensagem confirmando

**Pegar todos produtos ativos:**

Basta utilizar o endpoint com o get

Devera retornar:

- Mensagem confirmando
- Nome do produto
- Foto do produto
- Id do usuario que adicionou a tabela
- Status do produto

**Pegar por ID**

Basta utilizar o endpoint de **GET** com a ID do produto selecionado

Devera retornar:

- Mensagem confirmando
- Nome do produto
- Foto do produto
- Id do usuario que adicionou a tabela
- Status do produto

**Apagar por ID**

Devera ser fornecido o ID do produto a ser deletado com o metodo **DELETE**

Devera retornar:

- Mensagem confiramando


#

## Stack do projeto:

- Projeto desenvolvido com **Typescript* e **ExpressJS** fazendo uso de **MySQL**.

Qualquer sugestao, dicas, ideias, sempre bem vindo! 

Happy coding!
