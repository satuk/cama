import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";
import createPalette from 'material-ui/styles/palette';
import injectTapEventPlugin from "react-tap-event-plugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./containers/Header";
import Home from "./routes/Home";
import EventList from "./containers/EventList";

import store from "./store";

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark',
  }),
});

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Header>
            <Route exact path={"/"} component={ Home }/>
            <Route exact path={"/events"} component={ EventList }/>
          </Header>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
