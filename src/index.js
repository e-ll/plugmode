import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Redirect from="*" to="/greenfest" />
        {/* <Route path="/">
          <Redirect to="/greenfest" />
        </Route> */}
        <Route path="/greenfest" component={App} />
      </Switch>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
