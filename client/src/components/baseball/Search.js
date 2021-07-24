import React from 'react'
import { ApolloClient, InMemoryCache } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { RestLink } from "apollo-link-rest";

function Search () {


    // const restLink = new RestLink({ uri: "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB/teams/idTeam/strTeam" });
    const restLink = new RestLink({
        endpoints: {
            githubstatus: {
              uri: "https://githubstatus.herokuapp.com"
            }
          }
        });



    const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });

    const client = new ApolloClient({
        link: ApolloLink.from([ restLink, httpLink]),
        cache
    });
   
    }

export default Search;

















 //   const KEY = "1";
//   const URL = "";
//   const URLnameOne = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=";
//   const URLnameTwo = "%20";
//   const URLteamName = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
//   const URLleagueTeams = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB";
//   const URLplayerID = "https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=";




// Our state variable for the search term. Defaults to "microsoft/vscode".
// const [term, setTerm] = useState('');
// console.log('Search -> term', term);

// const sendTerm = (e) => {
//  e.preventDefault();

//  onFormSubmit(term);
// }; 

// return (
//     <>
//     <h1>Player Search</h1>
//     <span className="text-primary">
//         (search player)
//     </span>
//     <hr></hr>
//     <div className="form-group">
//         <form className="form" onSubmit={sendTerm}>
//         <div className="field">
//             <label style={{ marginRight: '5px' }}>Baseball Search</label>
//             <input
//             type="text"
//             value={term}
//             onChange={(e) => setTerm(e.target.value)}
//             placeholder="facebook/react"
//             />
//             <button className="btn" style={{ margin: '5px' }}>
//             Search
//             </button>
//         </div>
//         </form>
//     </div> 
//     </>
// );