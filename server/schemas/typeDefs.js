const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Team {
        _id: ID!
        name: String
        coach: String
        season: String
        playersId: [Player]
    }

    type Player {
        _id: ID!
        name: String
        image: String
        position: String
        height: String
        weight: String
        age: String
        number: String,
        games: String,
        points: String,
        assists: String,
        rebounds: String,
        steals: String,
        blocks: String
        teamId: [Team]
    }
    
    type Query {
        teams: [Team]
        players: [Player]
        team(teamId: ID!): Team
    }

    type Mutation {
        addTeam(name: String!, coach:String!, season: String!, playersId:[String]): Team,
        updateTeam(name: String!, coach: String!): Team,
        addPlayer(name: String, image: String, position: String, height: String, weight: String, age: String, number: String,  games: String, points: String, assists: String, rebounds: String, steals: String, blocks: String, teamId: [String]): Player,
        updatePlayer(name: String!, image: String!, position: String!, height: Int!, weight: Int, age: Int!, number: Int!): Player
    }
`

module.exports = typeDefs