import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { QUERY_SINGLE_PLAYER } from '../../utils/queries'

const SingleTeam = () => {
    const { playerId } = useParams()

    const { loading, data } = useQuery(QUERY_SINGLE_PLAYER, {
        variables: { playerId: playerId },
      }); 

    const player = data?.player || {}

    console.log(data)

    // const average = (x, y) => {
    //     let ppg = x/y
    //     return Math.round(ppg * 100)/100
    // }
    

    if (loading) {
        return <div>Loading...</div>;
      }
      return (
        <div className="card-header">
              <h2 className="singlePlayerHeader">Compare Yourself To NBA Stars</h2> 
          </div>
      ); 
}

export default SingleTeam