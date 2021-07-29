import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($newUser: NewUserInput!) {
    addUser(newUser: $newUser) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_TEAM = gql`
    mutation addTeam($name: String!, $coach: String!, $season: String!) {
        addTeam(name: $name, coach: $coach, season: $season) {
        _id
        name
        coach
        season
    }
}
`
export const REMOVE_TEAM = gql`
    mutation removeTeam($teamId: ID!) {
        removeTeam ( teamId: $teamId ) {
            _id
        }
    }
`


export const ADD_PLAYER = gql `
    mutation addPlayer ($teamId: ID!, $name: String, $image: String, $position: String, $height: String, $weight: String, $age: String, $number: String, $games: String, $points: String, $assists: String, $rebounds: String, $steals: String, $blocks: String) {
        addPlayer(teamId: $teamId, name: $name, image: $image, position: $position, height: $height, weight: $weight, age: $age, number: $number, games: $games, points: $points, assists: $assists, rebounds: $rebounds, steals: $steals, blocks: $blocks) {
            _id
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
    }
`

export const UPDATE_STATS = gql `
mutation updatePlayer ($_id: ID!, $games: String, $points: String, $assists: String, $rebounds: String, $steals: String, $blocks: String) {
    updatePlayer (_id: $_id, games: $games, points: $points, assists: $assists, rebounds: $rebounds, steals: $steals, blocks: $blocks) {
        players {
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