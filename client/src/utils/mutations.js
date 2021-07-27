import { gql } from '@apollo/client';

export const ADD_TEAM = gql`
    mutation addTeam($name: String!, $coach: String!, $season: String!) {
        addTeam(name: $name, coach: $coach, season: $season) {
        name
        coach
        season
    }
}
`

export const ADD_PLAYER = gql `
    mutation addPlayer ($name: String, $image: String, $position: String, $height: String, $weight: String, $age: String, $number: String, $games: String, $points: String, $assists: String, $rebounds: String, $steals: String, $blocks: String) {
        addPlayer(name: $name, image: $image, position: $position, height: $height, weight: $weight, age: $age, number: $number, games: $games, points: $points, assists: $assists, rebounds: $rebounds, steals: $steals, blocks: $blocks) {
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