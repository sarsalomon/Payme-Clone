import { gql } from 'apollo-server-express';

const typeDefs = gql`

    type User {
        phone: Int!
        password: String
        code: Int
        role: String
        status: Boolean
    }


    # Queries
    type Query {
        getAllUsers: [User!]!
    }

    # Mutations

`;

export default typeDefs 