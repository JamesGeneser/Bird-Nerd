const { gql } = require('apollo-server-express');



const typeDefs = gql `
type Birds {
    _id: ID
    name: String
    description: String
}
type User {
    _id: ID
    firstName: String
    lastName: String
}
`

module.exports = typeDefs;