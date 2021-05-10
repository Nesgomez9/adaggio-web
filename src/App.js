import './App.scss';

import { Home, Expert } from './screens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchEx } from './screens/SearchEx/SearchEx';

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
      </Switch>
    </Router>
  );
}

export default App;
