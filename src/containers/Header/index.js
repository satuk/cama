/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import {blue500, blue50} from "material-ui/styles/colors";
import {search} from 'material-ui/svg-icons/action/search'
import qs from "query-string";

const appName = "cama";
const styles = {
  content: {
    width: 960,
    margin: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {},
  app: {},
  buttonTextColor: {},
  toolbar: {
    backgroundColor: blue500,
    color: blue50,
    marginBottom: 50,
  }
};

const Login = () => {
  return (
    <div>
      <Link to="/sign-in"><FlatButton style={styles.buttonTextColor} label="Sign In"/></Link>
      <Link to="/sign-up"><FlatButton style={styles.buttonTextColor} label="Sign Up"/></Link>
    </div>
  );
}

const Logged = () => {
  return (
    <div>
      <Link to="/edit-profile"><FlatButton style={styles.buttonTextColor} label="Edit Profile"/></Link>
      <Link to="/sign-out"><FlatButton style={styles.buttonTextColor} label="Sign Out"/></Link>
    </div>
  );
};

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <Link to="/" style={styles.app}><ToolbarTitle text={appName}/></Link>
            <Link to="/register/staff-member"><FlatButton style={{ color: 'white' }}
                                                          label="Become a Staff-Member"/></Link>
            <Link to="/register/event-manager"><FlatButton style={{ color: 'white' }}
                                                           label="Become a Event-Manager"/></Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <TextField
              hintText="Find Events to apply"
              onChange={this.handleSearchBoxOnChange}
              value={this.state.searchEvent}
              type="input"
              underlineStyle={{ borderColor: 'white' }}
              underlineFocusStyle={{ borderColor: 'white' }}
              hintStyle={{ color: 'white' }}
              floatingLabelStyle={{ color: 'white' }}
            />
            <RaisedButton label="Search" style={{ color: 'white' }} onClick={this.handleButtonOnClick}/>
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            {this.state.logged ? <Logged /> : <Login />}
          </ToolbarGroup>
        </Toolbar>
        <div style={styles.content}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

export default Header;
