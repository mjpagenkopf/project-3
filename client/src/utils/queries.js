import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        user {
        _id
        username
        password
    }
}
`

export const QUERY_TEAMS = gql`
    query allTeams {
        teams {
        _id
        name
        coach
        season
        playersId {
            name
        }
    }
}
`
export const QUERY_SINGLE_PLAYER = gql `
    query singlePlayer ($playerId: ID!) {
        player(playerId: $playerId) {
            _id
            name
            image
            position
            height
            weight
            age
            number
            games
            points
            assists
            rebounds
            steals
            blocks
        }
    }
`

export const QUERY_SINGLE_TEAM = gql `
    query singleTeam ($teamId: ID!) {
        team(teamId: $teamId) {
            _id
            name
            coach
            season
            playersId {
                _id
                name
                image
                position
                height
                weight
                age
                number
                games
                points
                assists
                rebounds
                steals
                blocks
            }
        }
    }
`


export const QUERY_PLAYERS = gql`
    query allPlayers {
        players {
        _id
        name
        image
        position
        height
        weight
        age
        number
        games
        points
        assists
        rebounds
        steals
        blocks
        }
}
`