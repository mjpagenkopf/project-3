import { Link } from 'react-router-dom'
<<<<<<< HEAD:client/src/pages/TeamList.js
import {useQuery} from '@apollo/client'
import { QUERY_PLAYERS } from '../utils/queries'
import PlayerForm from './PlayerForm'
=======
import {useQuery, useParams, useMutation} from '@apollo/client'
import { QUERY_PLAYERS } from '../../utils/queries'
import { REMOVE_TEAM } from '../../utils/mutations'
>>>>>>> 82d85d688d3d360901ba84d9cd998ed90a2403eb:client/src/components/pages/TeamList.js
import PlayerList from './PlayerList'

const TeamList = ({ teams, title}) => {
  const { loading, data } = useQuery(QUERY_PLAYERS)
  // const [removeTeam] = useMutation(REMOVE_TEAM,{
  //   valiables: { teamId: teams._id } 
  // })

  // const handleRemove = async () => {
  //   try {
  //     const res = await removeTeam()
  //     return res
  //   }catch (e) {
  //     console.error(e)
  //   }
  // }

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
                      <Link 
                      className="teamName"
                      to={`/teams/${team._id}`}
                      >
                      {team.name}
                      </Link>
                    </div>
                    <div>
                      <p>Coach: {team.coach}</p>
                      <p>Season {team.season}</p>
                    </div>
                  </div>
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