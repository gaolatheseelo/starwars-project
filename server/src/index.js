const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

//Connecting to our Star Wars API
const PersonAPI = require('../datasources/person-api');

//Getting data from the Datasource
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      personAPI: new PersonAPI(),
    };
  },
});



server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
