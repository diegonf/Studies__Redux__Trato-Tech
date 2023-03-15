# <p align="center">![Trato Tech](./src/assets/logo.svg)<br></p>

* Instituição: [Alura](https://www.alura.com)
* Curso: 
  * Branch Curso 1 - [React: gerenciamento de estados globais com Redux](https://cursos.alura.com.br/course/react-gerenciamento-estados-globais-redux)
  * Branch Curso 2 - [React: Mutabilidade x Imutabilidade no Redux Toolkit com Immer](https://cursos.alura.com.br/course/react-mutabilidade-imutabilidade-redux-toolkit-immer)
  * Branch Curso 3 - [React: entendendo Middlewares com Redux Thunk](https://cursos.alura.com.br/course/react-entendendo-middlewares-redux-thunk)
  * Branch Curso 4 - [React: avançando em Middlewares com Listener Middleware](https://cursos.alura.com.br/course/react-avancando-middlewares-listener-middleware)
  * Branch Curso 5 - [React: utilizando a arquitetura Saga com Redux Saga](https://cursos.alura.com.br/course/react-utilizando-arquitetura-saga-redux-saga)
* Projeto Publicado: https://studies-redux-trato-tech.vercel.app/

## Descrição do projeto
Projeto de loja de produtos online utilizando React e Redux para gerenciamento de estado. Nesse projeto, foi aprendido o que é o redux e o que são as actions, despatch, store, reducers e conceitos como imutabilidade e o Immer.
<br>Foi utilizado o Redux Thunk para fazer chamadas assíncronas em conjunto com o toast do chakkra-ui para mostrar na tela os resultados das chamadas. 
<br>Depois essa lógica com thunk foi refatorada para a lógica com o middleware Listener, corrigindo assim questões de performance de ficar chamando a API para buscar dados desnecessários ou buscar o mesmo dado mais de uma vez.
<br>Por fim, foi refatorado o código para utilização da arquitetura Saga, onde foi trabalhado diversos conceitos utilizados no redux saga.

## Funcionalidades
* Página Home com todas as categorias disponibilizadas
* Página de Categoria com todos os itens da categoria escolhida
* Opção de favoritar item
* Opção de adicionar/ remover item ao carrinho
* Página carrinho com os itens adicionados e subtotal de todos os itens
* Opção de alterar quantidade dos itens na página carrinho
* Opção de finalizar compra na página carrinho, que encaminha para a página pagamento
* Página pagamento com opção de escolher cartão, vendo a taxa aplicada e com opção de finalizar compra

## Ferramentas utilizadas
* React.js
* Redux Toolkit
* React-Redux
* Redux Thunk
* Toast do Chakra-UI
* Redux middleware Listener
* Redux Saga

## Autores
| [<img src="https://avatars.githubusercontent.com/u/97759524?v=4" width=115><br><sub>Diego Ferreira</sub>](https://github.com/diegonf) | 
| :---: |