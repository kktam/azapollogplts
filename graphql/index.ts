import { AzureFunction, Context } from '@azure/functions'
import { ApolloServer, gql } from 'apollo-server-azure-functions'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

let server: ApolloServer

server = new ApolloServer({ typeDefs, resolvers });
exports.graphqlHandler = server.createHandler();