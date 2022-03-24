const resolvers = {
    Query: {
      // returns an array of Star Wars Characters that will be used to populate the homepage grid of our web client
      allPeople: (_, __, { dataSources }) => {
        return dataSources.personAPI.getAllPeople();
      },
    },
    Person: {
      name: ({ name }, _, { dataSources }) => {
        return dataSources.personAPI.getPerson (name);
      },
    },
  };
  
  module.exports = resolvers;
  