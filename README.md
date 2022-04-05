# NodeJs + API (Jotform) + MongoDB 
## Propósito Geral 
###### 04/04/2022
A seguinte aplicação está sendo desenvolvida para um projeto em que participo em parceria da Emprapii com a unidade [ITEC/FURG](https://embrapii.org.br/unidades/unidade-embrapii-em-sistema-roboticos-e-automacao-itec-furg-centro-em-ciencia-de-dados-e-robotica-da-universidade-federal-do-rio-grande/). No projeto, busca-se uma maneira de conseguir gerar formulários com diferentes vídeos do mesmo médico, o qual será enviado ao paciente. Assim, o paciente receberá um questionário específico com um vídeo específico. 

Aproveitei o projeto para também desenvolver mais minhas habilidades no Backend, utilizando ```nodeJs```, ```express```, ```MVC pattern``` dentre outras ferramentas. Atualmente, foram implementados os seguintes recursos:

- ```CRUD``` em ```nodeJs``` para o controle das URLs dos vídeos dos médicos
- Integração com a API do Jotform
- Geração de links contendo o formulário e o vídeo cadastrado
- ```Schedule``` com o ```node-cron``` para salvar novas respostas do formulário em um novo banco de dados (no momento ```MongoDB```)

A estrutura básica do CRUD para o projeto foi criada a partir do seguinte tutorial disponível gratuitamente no [Youtube](https://www.youtube.com/watch?v=W1Kttu53qTg&t=2s). Entretanto, as demais funcionalidades foram implementadas por mim como uma maneira de aprofundar meus conhecimentos :)

### Implemetanções
Busca por CPF do médico e geração dos links contendo o vídeo
![Busca por CPF e Geração do link](imgs/Busca_GerarURL.png)

Nova página com o Jotform + Vídeo Youtube
![Nova página: Jotform + Vídeo Youtube](imgs/novaPagina.png)

Adicionar e remover URLs de um determinado médico
![Adicionar novas URLs](imgs/addMoreURL.png)



## Instalação
Inicialmente, instale as dependências:
- ```npm i```

Após, é necessário configurar criar o arquivo 'config.env' e adicionar as seguintes variáveis 
```bash
MONGO_URI= suaChaveDoMongoDB
PORT=3000
API_KEY= chaveDoJotForm
FORM_ID= chaveDoFormulárioJotForm

FORM_LIMIT=5
FORM_FILTER="created_at:gt":"2022-03-30 00:00:00"
FORM_ORDERBY=created_at
```
Depois de colocar suas credencias, basta subir o servidor!
- ```npm run dev```
- acessar, em seu navegador: ```http://localhost:3000/```

### Heroku

Você também pode acessar a aplicação na plataforma
[Heroku](https://medlifecrud.herokuapp.com/)

## Packages
Abaixo, irei descrever o uso de alguns packages que considero mais "importantes" e que não foram implementados diretamente através do tutorial.

### MVC
Para a criação e controle das rotas, foi utilizado o ```express``` juntamente com o patrão de ```Model–View–Controller```

```javascript
const express = require('express');
const app = express();

// load routers
app.use('/', require('./server/routes/router'));
```

Já para o controle das Views, utilizou-se o package ```ejs```

```javascript
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
```

### Rotas e serviços criados 

```javascript
//services
route.get('/search',services.search_cpf)
route.get('/form',services.survey_form)

//controller
route.get('/api/user', controller.find_CPF);
route.get('/api/video', controller.find_video);

//controler to acess API Jotform
route.get('/api/form', controller.all_forms); 
```
