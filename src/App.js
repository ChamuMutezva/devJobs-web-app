import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {JobsProvider} from './Context/JobsContext'
import './sass/App.scss';
import Header from './Header/Header.js'
import HomePage from './Main/HomePage';
import ListPage from './Main/ListPage';

function App() {
 
  return (
    <div className="app__container">
      <Router>
        <Header />
        <Switch>
          <JobsProvider>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:id">
              <ListPage />
            </Route>
          </JobsProvider>
        </Switch>
      </Router>
    </div>

  )
}

export default App;
