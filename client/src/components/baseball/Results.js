import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
// import styled from "styled-components";


 const Results = () => {


  const STATUS_QUERY = gql`
  query statusQuery {
    status @rest(path: "/", type: "Status", endpoint: "githubstatus") {
      status
    }
  }
`;


    
return (
  <Query query={STATUS_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <h1>loading...</h1>;
      }
      return <h1>{data.status.status}</h1>;
    }}
  </Query>
);


 };

 export default Results;




//  console.log('Results -> stats', stats)

   
//    const renderedList = stats.map((stat) => {
//      return <BaseballItem key={stat.id} term={stat} />;
//    });

//    // Here we return our array of IssueItems wrapped inside a parent div
//    return <div className="ui relaxed divided list">{renderedList}</div>;