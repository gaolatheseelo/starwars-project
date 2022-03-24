
const {RESTDataSource} = require('apollo-datasource-rest');

// The datasource for our Star Wars API
class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  // Querying all characters from Star Wars API
  getAllPeople() {
    return this.get('people');
  }

// Querying a specific character using their name
  getPerson(name) {
    return this.get(`people/?search=${name}`);
  }
}

module.exports = PersonAPI;