import { NavLink, Switch } from 'react-router-dom';
import VendingMachine from './Components/VendingMachine';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Sardines from './Components/Sardines';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Switch>
          <NavLink exact to="/" render={() => <VendingMachine />} />
          <NavLink exact to="/soda" render={() => <Soda />} />
          <NavLink exact to="/chips" render={() => <Chips />} />
          <NavLink exact to="/sardines" render={() => <Sardines />} />
        </Switch>
      </nav>
    </div>
  );
}

export default App;
