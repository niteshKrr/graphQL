import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// here we are defining our schemas
const typeDefs = gql`
  type Query {
    greet: String
    bye: String
    fighting: Boolean
    savings: Int
  }
`;

// here we are defining our resolvers
const resolvers = {
  Query: {
    greet: () => {
      return "hello world";
    },
    bye: () => {
      return "bye bye! Happy learning.";
    },
    fighting: () => {
      return true;
    },
    savings: () => {
      return 200000000;
    },
  },
};

// here we are defining our server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// here we are passing 6969 port no. If we do not pass it, it will run on 4000 port by default.
server.listen(6969).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
