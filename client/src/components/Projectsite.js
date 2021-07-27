import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import { pageComponents } from './pages';
import { pages } from '../assets/data/projectSec'

export default function PortfolioSite() {
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
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}