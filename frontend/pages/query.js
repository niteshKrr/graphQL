import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALLUSERS } from "../GraphQL/queries";
import { GET_USERBY_EMAIL } from "../GraphQL/queries";



const query = () => {
    const { loading, error, data } = useQuery(GET_ALLUSERS);
    // const { loading, error, data } = useQuery(GET_USERBY_EMAIL, {
    //   variables: { myemail: "funny@12345" },
    // });


    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    if (data) {
        console.log("data :", data);
    }

  return (
    <div>query</div>
  )
}

export default query