var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const bodyParser = require("body-parser");

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// A raiz fornece uma função de resolver para cada ponto de extremidade da API

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use(bodyParser.json());
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Servidor rodando em http://localhost:4000/graphql');
