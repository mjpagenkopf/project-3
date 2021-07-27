import {useQuery} from '@apollo/client'
import { QUERY_PLAYERS } from '../../utils/queries'
import PlayerForm from './PlayerForm'
import PlayerList from './PlayerList'

const TeamList = ({ teams, title}) => {
  const { loading, data } = useQuery(QUERY_PLAYERS)

  const players = data?.players || []

  if (!teams.length) {
    return <h3>No Teams Yet</h3>
  }

return (
        <div>
          {teams &&
            teams.map((team) => (
              <div key={team._id} className="card teamCardFull ">
                  <div className="teamCard card-header text-light p-2 m-1 ">
                    <div className="teamCardHeader">
                      <a className="teamName" href={`/${team._id}`}>{team.name}</a>
                      <PlayerForm />
                    </div>
                    <div>
                      <p>Coach: {team.coach}</p>
                    </div>
                  </div>
                   <br />
                  <div style={{ fontSize: '1rem' }}>
                    <PlayerList 
                      players = {players}
                    />
                  </div>
              </div>
            ))}
        </div>
      );
    };
export default TeamList