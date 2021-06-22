import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import data from './data.json';
import Home from './pages/Home/index';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Home data={data} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
