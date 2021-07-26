import React, { useState } from "react";
import axios from 'axios';
// import BaseballForm from './BaseballForm';


function BaseballList() {

  let [name, setName] = useState('Mike Trout')
  let [playerFullName, setPlayerFullName] = useState('')
  let [playerCountry, setPlayerCountry] = useState('')
  let [playerTeam, setPlayerTeam] = useState('')
  let [playerPosition, setPlayerPosition] = useState('')
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(false)

  const fetchPlayer = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    axios.get('/baseball/:name', { name })
    .then((data) => {
      setPlayerFullName(data.playerFullName)
      setPlayerTeam(data.playerTeam)
      setPlayerCountry(data.playerCountry)
      setPlayerPosition(data.playerPosition)
    })
    .catch(e => {
      setError(true)
      console.log(e)
    })
    .finally(() => {
      setLoading(false)
    })
}

  return (
      <div>
        <h2>Search Player</h2>
          <form onSubmit={fetchPlayer}>
            <fieldset>
              <label>
                Enter name
                <input
                  type='text'
                  value={ name }
                  placeholder='Mike Trout'
                  onChange={(e) => setName(e.target.value)}
                  />
              </label>
              <button type='submit'>Get Player</button>
            </fieldset>
          </form>

          <h2>Results</h2>
          {loading && <p>Fetching player</p>}
          {error && <p>Something went wrong</p>}

          {playerFullName && <p>Name: {playerFullName}</p>}
          {playerTeam && <p>MLB Team: {playerTeam}</p>}
          {playerPosition && <p>{playerPosition}</p>}
          {playerCountry && <p>Country of Birth: {playerCountry}</p>}
      </div>
    );
}


export default BaseballList;
