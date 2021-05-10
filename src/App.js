import './App.scss';
import { NavBar } from './components';
import { Home } from './screens/Home/Home';
import { SearchEx } from './screens/SearchEx/SearchEx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
