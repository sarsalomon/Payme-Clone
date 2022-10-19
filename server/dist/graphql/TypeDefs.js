"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `

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
exports.default = typeDefs;
