import './App.scss';
import { Home, Expert, SearchEx, Orgs, Login, Organization } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <div className="App">
            <Home />
          </div>
        </Route>
        <Route exact path="/profile" component={Expert} />
        <Route exact path="/" component={Login} />
        <Route exact path="/search-expert" component={SearchEx} />
        <Route exact path="/search-organizations" component={Orgs} />
        <Route exact path="/organizations/:id" component={Organization} />
      </Switch>
    </Router>
  );
}

export default App;
