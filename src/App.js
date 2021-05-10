import './App.scss';
import { Home, Expert, SearchEx, Orgs } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
        <Route exact path="/expert" component={Expert} />
        <Route exact path="/search-expert" component={SearchEx} />
        <Route exact path="/search-organizations" component={Orgs} />
      </Switch>
    </Router>
  );
}

export default App;
