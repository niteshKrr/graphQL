 import {gql} from "@apollo/client"

export const GET_ALLUSERS = gql`
  query usersAll {
    users {
      firstName
      lastName
      email
    }
  }
`;

export const GET_USERBY_EMAIL = gql`

  query userbyemail($myemail:String!){
    user(email:$myemail){
       firstName 
       lastName
    }
  }
`;