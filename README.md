# Logica-Cadastro-de-livros

Na atividade de hoje vamos precisar desenvolver uma API com Express.

Essa API deve ser capaz de manipular um CRUD de usuário, com login e geração de token (JWT).

Além do CRUD de usuário com login, nossa aplicação deve ser responsável por cadastrar e gerenciar uma coleção de livros. Essa coleção deve ser armazenada em um array diferente do array de usuários, ou seja, devemos ter 2 bancos de dados.

#

# CRIAÇÃO USUÁRIOS

**<font color=green>POST</font> /users - Formato da Requisição**

```js
{
    "name": "Jhoe Doe",
    "email": "jhoedoe@mail.com",
    "password": "123"
}
```

em caso de sucesso, está será a resposta:
**<font color=green>POST</font> /user - Formato da Resposta - <font color=lime>STATUS 201</font>**

```js
{
    "id": "3f69769f-3f7c-4e63-8125-c00813c4eaac",
    "email": "jhoedoe@mail.com",
    "name": "Jhoe Doe",
    "password": "$2a$10$UCv98Gcpfy18p.Fk5NvjHuGVu9sHGowBG1JbNIioJoqN9NlSZ2zk2"
}

```

# CRIAÇÃO DOS LIVROS

**<font color=green>POST</font> /books - Formato da Requisição**

```js
{
    "title": "Os feiticeiros",
	"author": "Desconhecido",
	"year": "1996",
	"owner_id": "3f69769f-3f7c-4e63-8125-c00813c4eaac"
}
```

em caso de sucesso, está será a resposta:
**<font color=green>POST</font> /books - Formato da Resposta - <font color=lime>STATUS 201</font>**

```js
{
    "id": "3420be30-f989-4182-92c1-b04f228cb285",
    "title": "Os feiticeiros",
    "author": "Desconhecido",
    "year": "1996",
    "owner_id": "3f69769f-3f7c-4e63-8125-c00813c4eaac"
}

```
