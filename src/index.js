import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./containers/Header";
import Home from "./routes/Home";

import store from "./store";


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Header>
            <Route exact path={"/"} component={ Home }/>
          </Header>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
