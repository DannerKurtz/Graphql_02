const { ApolloServer, gql } = require("apollo-server");

/**
 * Scalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */
const { resolvers, typeDefs } = require("./src/graphql");
const CreateContatoService = require("./src/services/CreateContatosService");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: () => ({
    CreateContatoService: CreateContatoService,
  }),
});

server.listen().then(({ url }) => {
  console.log("server on!: ", url);
});
