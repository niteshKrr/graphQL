import React from "react";
import { useMutation } from "@apollo/client";
import { NEW_USER } from "../GraphQL/mutations";
import { useState } from "react";

const mutation = () => {
  const [newuser, { data, loading, error }] = useMutation(NEW_USER);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");

  const btnClick = () => {
    const data1 = {
      firstName,
      lastName,
      email,
    };
    newuser({ variables: { user: data1 } });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <div>
        <input
          type="firstName"
          style={{ border: "2px solid black" }}
          value={firstName}
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="lastName"
          style={{ border: "2px solid black" }}
          value={lastName}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="Email"
          style={{ border: "2px solid black" }}
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={btnClick}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default mutation;
