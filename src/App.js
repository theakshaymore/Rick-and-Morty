import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CharList from "./components/CharList";
import Location from "./components/Location";
import Episode from "./components/Episode";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <br />
        <br />
        <div className="options container">
          <Switch>
            <Route path="/characters">
              <CharList />
            </Route>
            <Route path="/locations">
              <Location />
            </Route>
            <Route path="/episodes">
              <Episode />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
