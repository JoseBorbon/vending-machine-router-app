import { Route, NavLink, Switch } from 'react-router-dom';
import VendingMachine from './Components/VendingMachine';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Sardines from './Components/Sardines';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="VendingMachine-top-nav">
        <NavLink activeClassName="Active-page" exact to="/">
          Vending Machine
        </NavLink>
        <NavLink activeClassName="Active-page" exact to="/soda">
          Soda
        </NavLink>
        <NavLink activeClassName="Active-page" exact to="/chips">
          Chips
        </NavLink>
        <NavLink activeClassName="Active-page" exact to="/sardines">
          Sardines
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </Switch>
    </div>
  );
}

export default App;
