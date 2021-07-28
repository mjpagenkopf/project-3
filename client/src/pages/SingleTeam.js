import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { QUERY_SINGLE_TEAM } from '../utils/queries'

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
              <h4>Season: {team.season}</h4> 
          </div>
          {team &&
                team.playersId.map((player) => (
          <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card card-flip h-100">
                        <div class="card-front text-white bg-dark">
                            <div class="card-body">
                                <i class="fa fa-search fa-5x float-right"></i>
                                <h3 class="card-title">Front</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div class="card-back bg-white">
                            <div class="card-body">
                                <h3 class="card-title">Back</h3>
                                <p class="card-text">Suprise this one has more more more more content on the back!</p>
                                <a href="#" class="btn btn-outline-secondary">Action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        ))}  
        </div>
      ); 
}

export default SingleTeam

                {/* <div key={player._id} className="card playerCardFull teamPagePlayerCard">
                    <div className="playerCard card-header text-light p-2 m-1 ">
                        <h4 className="teamPagePlayerCard">
                            <u>{player.name}</u>
                        </h4>
                    </div>
                    <div className="singleTeamPlayerFlex">
                        <div>
                            <img src={`${player.image}`} />
                </div> */}
        {/* <div>
            {team &&
                team.playersId.map((player) => (
                <div key={player._id} class="card-wrapper">
                    <div id={`${player.name}`} className="card card-rotating text-center">
                        <div class="face front">
                            <div class="card-up">
                                <img class="card-img-top" src={`${player.image}`} alt={`${player.name}`}/>
                                <a class="rotate-btn" data-card={`${player.name}`}>Click here to rotate</a>
                            </div>
                        </div>
                        <div class="face back">
                            <div class="card-body">
                                <div>
                                    <h3>Player Details</h3>
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
                                    <thead>
                                        <tr>
                                        <th className="tddata" scope="col">Games</th>
                                        <th className="tddata" scope="col">Points</th>
                                        <th className="tddata" scope="col">Assists</th>
                                        <th className="tddata" scope="col">Rebounds</th>
                                        <th className="tddata" scope="col">Steals</th>
                                        <th  className="tddata" scope="col">Blocks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td className="tddata">{player.games}</td>
                                        <td className="tddata">{average(player.points, player.games)}</td>
                                        <td className="tddata">{average(player.assists, player.games)}</td>
                                        <td className="tddata">{average(player.rebounds, player.games)}</td>
                                        <td className="tddata">{average(player.steals, player.games)}</td>
                                        <td className="tddata">{average(player.blocks, player.games)}</td>
                                        </tr>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="rotate-btn" data-card="card-1"><i class="fas fa-undo"></i> Click here to rotate back</a>
                </div>
                ))}
                </div>
        </div> */}