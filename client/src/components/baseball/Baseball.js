// import React, { useEffect, useState } from 'react';
// import Search from '../baseball/Search';
// import Results from '../baseball/Results';

// function Baseball() {

//   let [ stat, setStat ] = useState([]);

//   useEffect(() => {
//     document.title = 'Baseball Things';
//   }, []);

//   const getBaseballStats = async(props) => {
//     let statsURL = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${props}%20${props}`;
//     const response = await fetch(statsURL);
//     const data = await response.json();
//     setStat(data);
//   };

//   return (
//     <div className="container">
//       <Search onFormSubmit={getBaseballStats} />
//       <div className="col auto">
//         <div className="row">
//           <div className="col-11">
//             <Results stat={stat} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Baseball;