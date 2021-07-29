import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

<<<<<<< HEAD:client/src/pages/SingleTeam.js
import { QUERY_SINGLE_TEAM } from '../utils/queries'
=======

import PlayerForm from './PlayerForm'
import { QUERY_SINGLE_TEAM } from '../../utils/queries'
import PlayerList from './PlayerList'
import UpdatePlayerForm from './UpdatePlayerForm'
>>>>>>> 82d85d688d3d360901ba84d9cd998ed90a2403eb:client/src/components/pages/SingleTeam.js

const SingleTeam = () => {
    const { teamId } = useParams()

    const { loading, data } = useQuery(QUERY_SINGLE_TEAM, {
        variables: { teamId: teamId },
      }); 

    const team = data?.team || {}

    const average = (x, y) => {
        let ppg = x/y
        return Math.round(ppg * 100)/100
    }
    

    if (loading) {
        return <div>Loading...</div>;
      }
      return (
        <div>
          <div className="card-header">
              <h2>{team.name}</h2>
              <PlayerForm teamId= {team._id}/>
              <h4>Season: {team.season}</h4> 
          </div>
          <div className="container">
          <div className="row">
          {team &&
                team.playersId.map((player) => (
                <div className="col-sm-4">
                    <div className="card card-flip h-100 playerCardFront">
                            <div className="card-body">
                                <img className="card-img-top singleTeamPlayerImage" src={`${player.image}`} alt={`${player.name}`}/>
                            </div>
                        <div className="card-back">
                            <div className="card-body playerCardBack">
                                <div>
                                    <Link 
                                        to={`/players/${player._id}`}
                                    >
                                    <h2 className="singleTeamPlayerList">{player.name}</h2>
                                    </Link>
                                    <ul className="singleTeamPlayerList">
                                        <li>Number: {player.number}</li>
                                        <li>Position: {player.position}</li>
                                        <li>Age: {player.age}</li>
                                        <li>Height: {player.height} inches</li>
                                        <li>Weight: {player.weight} lbs</li>
                                    </ul>
                                </div>
                                <div className="singleTeamPlayerStats">
                                    <h3>{team.season} Player Stats</h3>
                                    <div>
                                        <div className= "flexStats">
                                            <thead>
                                                <tr>
                                                    <th className="padStat" scope="col">Games</th>
                                                    <th className="padStat" scope="col">PPG</th>
                                                    <th className="padStat" scope="col">APG</th>
                                                    <th className="padStat"  scope="col">RPG</th>
                                                    <th className="padStat"  scope="col">SPG</th>
                                                    <th className="padStat"  scope="col">BPG</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="padStat" >{player.games}</td>
                                                    <td className="padStat" >{average(player.points, player.games)}</td>
                                                    <td className="padStat" >{average(player.assists, player.games)}</td>
                                                    <td className="padStat" >{average(player.rebounds, player.games)}</td>
                                                    <td className="padStat" >{average(player.steals, player.games)}</td>
                                                    <td className="padStat" >{average(player.blocks, player.games)}</td>
                                                </tr>
                                            </tbody>
                                            <UpdatePlayerForm id = {player._id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ))} 
        </div>    
        </div> 
        </div>
      ); 
}

export default SingleTeam                