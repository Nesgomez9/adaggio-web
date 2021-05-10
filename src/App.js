import './App.scss';
import { NavBar } from './components';
import { Home } from './screens/Home/Home';
import { SearchEx } from './screens/SearchEx/SearchEx';
import { Orgs } from './screens/Orgs/Orgs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Orgs />
    </div>
  );
}

export default App;
