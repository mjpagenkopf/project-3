// Package imports
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from '../src/utils/auth';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Header from '../src/components/Header';

// Page imports
import Home from './pages/Home';
import Soccer from './pages/Soccer';
import Basketball from './pages/Basketball';
import Baseball from './pages/Baseball';
import Create from './pages/Create';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Team from './pages/TeamForm';
import Player from './pages/PlayerForm';
import TeamList from './pages/TeamList';
import PlayerList from './pages/PlayerList';
import SingleTeam from './pages/SingleTeam';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Once we have backend connected, since everyone will be unauthenticated at the moment
export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename="/">
        {Auth.loggedIn() ? (
          <div className="App">
            <div className="non-footer m-2 m-sm-4">
              <Header />
              <section className="content">
                {/* Set default page to Home */}
                <Route exact path="/">
                  <Redirect to="/create" />
                </Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/soccer" component={Soccer} />
                <Route exact path="/basketball" component={Basketball} />
                <Route exact path="/baseball" component={Baseball} />
                <Route exact path="/teams/:teamID" component={SingleTeam} />
                <Route
                  exact
                  path="/create"
                  component={Create}
                />
                <Route
                  exact
                  path="/team"
                  component={Team}
                />
                <Route
                  exact
                  path="/player"
                  component={Player}
                />
                <Route
                  exact
                  path="/teamList"
                  component={TeamList}
                />
                <Route
                  exact
                  path="/playerList"
                  component={PlayerList}
                />
              </section>
            </div>
          </div>
        ) : (
          // Once user is logged in, /login and /signup are no longer accessible
          <section className="content">
            {/* Catch all for any URLs besides /login or /signup */}
            <Route path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </section>
        )}
      </BrowserRouter>
    </ApolloProvider>
  );
}