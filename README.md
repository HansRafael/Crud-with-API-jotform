# NodeJs + API (Jotform) + MongoDB 
## Propósito Geral 
###### 04/04/2022
A seguinte aplicação está sendo desenvolvida para um projeto em que participo em parceria da Emprapii com a unidade [ITEC/FURG](https://embrapii.org.br/unidades/unidade-embrapii-em-sistema-roboticos-e-automacao-itec-furg-centro-em-ciencia-de-dados-e-robotica-da-universidade-federal-do-rio-grande/). No projeto, busca-se uma maneira de conseguir gerar formulários com diferentes vídeos do mesmo médico, o qual será enviado ao paciente. Assim, o paciente receberá um questionário específico com um vídeo específico. 

Aproveitei o projeto para também desenvolver mais minhas habilidades no Backend, utilizando ```nodeJs```, ```express```, ```MVC pattern``` .Atualmente, foram implementados os seguintes recursos:

- ```CRUD``` em ```nodeJs``` para o controle das URLs dos vídeos dos médicos
- Integração com a API do Jotform
- Geração de links contendo o formulário e o vídeo cadastrado
- ```Schedule``` com o ```node-cron``` para salvar novas respostas do formulário em um novo banco de dados (no momento ```MongoDB```)

## Rodando localmente:
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

## Heroku

Você também pode acessar a aplicação na plataforma
[Heroku](https://medlifecrud.herokuapp.com/)



```bash
pip install foobar
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)