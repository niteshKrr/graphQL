import("./mongodb/conn.js");
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from "./resolver.js";
import typeDefs from "./schemaGQL.js";

const context = () => {
//   console.log("printing from middleware");
    return {
        name:"rahul"
    }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Application started on ${url}`);
});
