import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/GraphQL")
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
