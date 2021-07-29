import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import { pageComponents } from './pages';
import { pages } from '../assets/data/projectSec'
import SingleTeam from '../components/pages/SingleTeam'
import SinglePlayer from '../components/pages/SinglePlayer'

export default function Projectsite() {
//   const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }
  
  return (
    <div className='flex flex-col min-h-screen relative overflow-hidden'>
      <BrowserRouter>
        <Header pages={pages} />
        <main className='flex-grow flex'>
          <Switch>
            {/*Default to About page*/}
            <Route path='/' exact component={pageComponents['Home']} />
            {pages.map((pageName, index) => (
              <Route
                key={index}
                path={`/${pageName.toLowerCase()}`}
                component={pageComponents[pageName]}
              />
            ))}
            <Route exact path="/teams/:teamId" component={SingleTeam} />
            <Route exact path="/players/:playerId" component={SinglePlayer} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}