const { gql } = require("apollo-server-express");
//const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

/*const TypeDefs = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});*/

const typeDefs = gql`

    type User {
        id: Int!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    
    # Queries
    type Query {
        getAllUsers: [User!]!
    }
    
    # Mutations
    type Mutation {
        createUser(id: Int!, firstName: String!, lastName: String!, email: String!, password: String!): User!
    }
`;

module.exports = { typeDefs };
