import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import Search from "../baseball/Search"; //./apolloClient
import BaseballItem from "../baseball/BasebalItem"; // ./StarredRepos
import TokenForm from "./TokenForm";
import Results from "../baseball/Results"; // ./Status


function Baseball() {

return (
    <ApolloProvider client={apolloClient}>
        <h1>Baseball</h1>
       
          <Fragment>
            <Results />
            <BaseballItem />
          </Fragment>
    
      </ApolloProvider>
    );

}

export default Baseball;


{/* <Query query={STATUS_QUERY}>
        {({data, loading}) => {
            if(loading) {
                return <span>loading...</span>
            }
            return <span>{data.status.status}</span>
        }}
    </Query> */}











