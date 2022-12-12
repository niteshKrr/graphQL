import { gql } from "apollo-server";

const typeDefs = gql`
  #graphql
  type Query {
    users: [User]
    user(email: String!): User
    userThroughFirstName(firstName:String!): User
  }

  type Mutation {
    signUpUser(newUser: createUser!): String
  }

  type User {
    firstName: String
    lastName: String
    email: String
  }


  input createUser {
    firstName: String
    lastName: String
    email: String
  }
`;

export default typeDefs;
