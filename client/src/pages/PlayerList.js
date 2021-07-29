import { Link } from 'react-router-dom';

const PlayerList = ({ players, title}) => {
    if (!players.length) {
        return <h3>No Teams Yet</h3>
    }

return (
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th className="tddata" scope="col">Games</th>
                    <th className="tddata" scope="col">Points</th>
                    <th className="tddata" scope="col">Assists</th>
                    <th className="tddata" scope="col">Rebounds</th>
                    <th className="tddata" scope="col">Steals</th>
                    <th  className="tddata" scope="col">Blocks</th>
                </tr>
            </thead>
            <tbody>
            {players &&
            players.map((player) => (
                <tr>
                    <Link
                    to={`/players/${player._id}`}>
                    <td className="tdName">{player.name}</td>
                    </Link>
                    <td className="tddata">{player.games}</td>
                    <td className="tddata">{player.points}</td>
                    <td className="tddata">{player.assists}</td>
                    <td className="tddata">{player.rebounds}</td>
                    <td className="tddata">{player.steals}</td>
                    <td className="tddata">{player.blocks}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
        
      );
    };

// <div>
        //   <h3>{title}</h3>
        //   {players &&
        //     players.map((player) => (
        //       <div key={player._id} className="card mb-3">
        //         <p>{player.name}</p>
        //      </div>
        //     ))}
        // </div>

export default PlayerList