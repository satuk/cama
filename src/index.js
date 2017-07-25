import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {colors} from "./utils/theme";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {createMuiTheme, MuiThemeProvider} from "material-ui/styles";
import createPalette from "material-ui/styles/palette";
import injectTapEventPlugin from "react-tap-event-plugin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./containers/Header";
import Home from "./routes/Home";
import EventList from "./routes/Events";
import OrganizationList from "./routes/Organizations";
import EventsByOrganization from "./routes/EventsByOrganization";
import EventApplication from "./routes/EventApplication";
import Join from './routes/Join';

import store from "./store";

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark',
  }),
  overrides: {
    Header: {
      root: {
        backgroundColor: colors.dark3,
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: colors.dark1,
      },
    },
    MuiButton: {
      raised: {
        background: 'linear-gradient(45deg, ' + colors.orange + ' 30%, ' + colors.yellow + ' 90%)',
        borderRadius: 3,
        border: 0,
        color: colors.dark1 + '!important',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px' + colors.dark3,
      },
      raisedPrimary: {
        background: 'linear-gradient(45deg, ' + colors.dark2 + ' 30%, ' + colors.dark3 + ' 90%)',
        borderRadius: 3,
        border: 0,
        color: colors.yellow + '!important',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px' + colors.dark3,
      },
    },
    MuiCardActions: {
      root: {
        backgroundColor: colors.dark4,
        justifyContent: 'space-around',
        padding: '5px 0',
      },
    },
    MuiCardContent: {
      root: {
        height: '125px',
        paddingBottom: 20,
      },
    },
    MuiCircularProgress: {
      root: {
        color: colors.yellow,
      },
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: 'center',
      },
    },
  },
});

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router basename="/cama">
        <Switch>
          <Header>
            <Route exact path={"/"} component={ Home }/>
            <Route exact path={"/join"} component={Join}/>
            <Route exact path={"/events"} component={ EventList }/>
            <Route exact path={"/events/search"} component={ EventList }/>
            <Route exact path={"/organizations/:organization_id/events/:event_id/apply"}
                   component={ EventApplication }/>
            <Route exact path={"/organizations"} component={OrganizationList}/>
            <Route exact path={"/organizations/:id/events"} component={ EventsByOrganization }/>
          </Header>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
