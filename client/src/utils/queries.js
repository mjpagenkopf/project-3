import { gql } from '@apollo/client';

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

// export const QUERY_SINGLE_TEAM = gql`
//     query singleTeam($teamId:ID!) {
//         team(teamID: $teamId) {
//             _id
//             name
//             coach
//             season
//             [players]
//         }
//     }
// `
