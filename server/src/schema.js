const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  "Get all star wars characters for homepage grid"
  allPeople: [Person]
}
"A person is a character on star wars"
type Person {
  "The name of the star wars character"
   name: String!
"The  height of the star wars character"
    height: String
"The mass of the star wars character"
   mass: String
"The hair color of the star wars character"
   hair_color: String
"The skin color of the star wars character"
   skin_color: String
"The eye color of the star wars character"
   eye_color: String
"The birth year of the star wars character"
   birth_year: String
"The gender of the star wars character"
   gender: String
}
`

module.exports = typeDefs;