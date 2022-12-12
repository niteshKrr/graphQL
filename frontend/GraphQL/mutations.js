import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation create($user: createUser!) {
    signUpUser(newUser: $user)
  }
`;