import { NavLink, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Switch>
          <NavLink exact path="/" render={() => <VendingMachine />} />
          <NavLink exact path="/soda" render={() => <Soda />} />
          <NavLink exact path="/chips" render={() => <Chips />} />
          <NavLink exact path="/sardines" render={() => <Sardines />} />
        </Switch>
      </nav>
    </div>
  );
}

export default App;
