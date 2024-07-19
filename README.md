## Estatísticas de Países 🌍

Este projeto tem como objetivo criar uma API para gerenciar e visualizar dados estatísticos de países, incluindo índices de fome, desigualdade social e escolaridade. A API permite a inserção, consulta, exclusão e listagem dessas estatísticas.

### Estrutura de Arquivos 📄


```
├── src
├── README.md
├── package.json
└── app.js
```


## Pré-requisitos 🔧

- Node.js
- NPM (Node Package Manager)

## Instalação 🛠

1. Clone o repositório:

   ```
   git clone https://github.com/seu-usuario/EstatisticasDePaises.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd EstatisticasDePaises
   ```
   
3. Instale as dependências:

   ```
   npm install
   ```


## Executando a Aplicação &#x27A1;

- npm start

## Endpoints

## Importando a Collection no Postman

- Inserir Estatística

- Inserir Estatística
- Rota: POST /estatistica/inserir
- Descrição: Insere uma nova estatística de um país.
- Corpo da Requisição: json

```
{
  "pais": "Nome do País",
  "fome_indice": valor,
  "desigualdade_social": valor,
  "escolaridade_indice": valor
}
```

## Contribuindo

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença &#x1F469;&#x1F3FF; &#x1F468;&#x1F3FF;

© Este projeto foi feito pelo Squad 3. 
