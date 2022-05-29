# practice.automationtesting-cypress
Projeto utilizando o Cypress como framework de testes automatizados e2e.<br/>
## Execução dos testes local
Clone o projeto e instale suas dependências com o comando abaixo:
```
$ npm install
```
Para rodar os testes localmente, executar o comando abaixo e selecionar o spec que deseja executar:
```
$ npm run cypress:open
```
## Entendendo a estrutura do projeto
Foi utilizado o padrão Page Objects que é um nível de abstração de criar iterações na aplicação com a interface gráfica de usuário, ou seja, ações são realizadas na aplicação via telas do sistema. Desta forma, é possivel aplicar o reuso de código, facilitar a leitura do código, encapsulamento de métodos e elementos dentro de uma determinada página, no qual o foco principal é realizar testes focados no comportamento do usuário.
## Estrutura do Projeto (dependências)

```
01 .
02 |-- cypress
03 |    `-- factory
04 |    `-- fixtures
05 |    `-- integration
06 |    `-- plugins     
07 |        |-- index.js
08 |    `-- support
09 |        | pages
10 |          |-- Page
11 |          |-- basePage.js
12 |        | command.js
13 |        | index.js
```
<p>
  03 - Pasta que contém arquivos com metodos para geração de massa de dados dinamica.</br>
  04 - Pasta que contém arquivos que o cypress pode utilizar para fazer carga de dados estaticos.<br/>
  05 - Pasta integration é onde o cypress irá buscar por testes.<br/>
  07 - index.js contém os plugins utilizados no projeto.<br/>
  08 - Diretório support contém arquivos de suporte que podem ser utilizado nas execuções.<br/>
  09 - Diretório utilizado para armazenar o mapeamento das páginas e elementos do sistema a ser testado divididos por contextos-features, utilizando o Page Objects. <br/>
  12 - command.js utilizado para importar os comandos customizados criados no cypress.<br/>
  13 - index.js utilizado para criar configurações globais para o cypress.<br/>
</p>

## Aplicando boas práticas durante o desenvolvimento dos testes
Para a melhor organização dos testes dentro do projeto deve-se seguir um padrão de desenvolvimento, algumas recomendações:
1. Ao trabalhar com Page Objects no diretório: `/cypress/pages` </br>
1.1. Se for criar uma função ou método que pode ser realizado em qualquer contexto, criar no arquivo `/cypress/support/pages/basePage.js`. </br>
1.2. Antes de criar uma função, método ou comandos, deve-se checar se o mesmo já existe nos arquivos existentes que estão nos diretórios citados acima.

## Referências
Boas práticas:
https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

Documentação da API:
https://docs.cypress.io/api/api/table-of-contents.html