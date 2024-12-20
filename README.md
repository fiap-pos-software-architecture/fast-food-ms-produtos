<div align="center" id="top">
  <!-- <img src="./.github/app.gif" alt="Restfull Api Hexagonal Architecture" /> -->

  &#xa0;

  <!-- <a href="https://restfullapihexagonalarchitecture.netlify.com">Demo</a> -->
</div>

<h1 align="center">Microsserviço de Produtos - Restfull Api Hexagonal Architecture</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8">

  <!-- <img alt="Licença" src="https://img.shields.io/github/license/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/jennyffermorais/restfull-api-hexagonal-architecture?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Restfull Api Hexagonal Architecture 🚀 Em construção...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-documentação">Documentação</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-como-executar">Como Executar</a> &#xa0; | &#xa0;
  <a href="#memo-equipe-43" target="_blank">Equipe</a>
</p>

<br>


## :dart: Sobre ##

Projeto desenvolvido como requisito para aprovação na quarta fase da Pós-graduação em Software Architecture na instituição de ensino Fiap.

Em síntese, este projeto foi desenvolvido para atender aos requisitos de um sistema de backend em microsserviço abstraindo a funcionalidade de Produtos do monolítico que gerencia pedidos e pagamentos, bem como a preparação e entrega de pedidos. O projeto utiliza a Arquitetura Hexagonal e segue os padrões de Domain-Driven Design (DDD), conforme apresentado nas aulas.



## :sparkles: Funcionalidades ##

:heavy_check_mark: **Gestão de Produtos:** APIs para criar, editar, remover produtos e buscar produtos por categoria;\

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:


- **TypeScript** e **Node.js** para o desenvolvimento da aplicação.
- **Express** como framework web.
- **Arquitetura Hexagonal** para organização do código.
- **Swagger** para documentação das APIs.
- **Docker** e **Docker Compose** para contêinerização da aplicação.
- **MySQL** como banco de dados.

## :white_check_mark: Documentação ##

A documentação do sistema foi desenvolvida seguindo os princípios de DDD com Event Storming, incluindo todos os tipos de diagrama apresentados na aula 6 do módulo de DDD.


#### Fluxos Documentados

1. **Criação e Listagem de Produtos**

Os diagramas foram desenhados seguindo os padrões explicados na aula e utilizando a linguagem ubíqua e, podem ser visualizados no nosso [MIRO](https://miro.com/app/board/uXjVKSMFSYU=/?share_link_id=1161200727).


## :checkered_flag: Como Executar ##

#### Pré-requisitos

- **Docker** e **Docker Compose** instalados na máquina.

#### Passos para Execução

1. Clone este repositório para sua máquina local.
   ```bash
   git clone https://github.com/jennyffermorais/RESTfull-API-hexagonal-architecture.git
   cd RESTfull-API-hexagonal-architecture
   ```

2. Configure as variáveis de ambiente. Crie um arquivo `.env` com as seguintes variáveis:
   ```env
    MYSQL_ROOT_PASSWORD=mysql
    MYSQL_PASSWORD=jm_password
    MYSQL_DATABASE=tech_challenge_BD
    MYSQL_USER=jm_user
    MYSQL_HOST=mysql-db
    MYSQL_PORT=3306
    APP_PORT=3000
   ```

3. Compile e construa a aplicação usando Docker.
   ```bash
   docker-compose up --build
   ```

4. Acesse o Swagger para testar as APIs.
   - O Swagger estará disponível em `http://localhost:3000/docs`.

#### Banco de Dados

A aplicação está configurada para utilizar MySQL conforme especificado no arquivo `docker-compose.yml`.

## :memo: Equipe 43

- [Guilherme de Lima](https://github.com/GuilhermeLimaSoares)
- [Jennyffer de Morais](https://github.com/jennyffermorais)
- [Paulo Pupo](https://github.com/devpupo)
- [Salomao-polega](https://github.com/salomao-polegar)
- [Paulo Pupo](https://github.com/devpupo)

&#xa0;

## :checkered_flag: Cobertura de Testes Unitários ##

![image](https://github.com/user-attachments/assets/06b5c329-b89a-4e6f-acbb-1a4af8d0fa51)


<a href="#top">Voltar para o topo</a>


