import User  from "./mongodb/models/user.js";

const resolvers = {
  Query: {
    users: async () => {
      const result = await User.find();
      return result;
    },

        user: async (parent, args, { name }) => {
            console.log("name :", name);
      const result = await User.findOne({ email: args.email });
      return result;
    },

    userThroughFirstName: async (parent, {firstName}) => {
        console.log("firstName :", firstName);
        const result = await User.findOne({ firstName });
      return result;
    },
  },

  Mutation: {
    signUpUser: async (_, { newUser }) => {
      const newData = new User({
        ...newUser,
      });
      const result = await newData.save();
      return "user created successfully";
    },
  },
};

export default resolvers;
