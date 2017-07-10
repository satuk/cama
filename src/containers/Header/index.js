/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {AppBar, Button, TextField, Toolbar, Typography} from "material-ui";
import {Link} from "react-router-dom";


const appName = "cama";
const styleSheet = createStyleSheet('Header', theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  app: {
    backgroundColor: '#424242',
  },
  a: {
    textDecoration: 'none',
  },
  appLink: {
    color: 'white',
    textDecoration: 'none',
  },
}));

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.app}>
            <Typography
              type="title"
              className={classes.flex}
            >
              <Link className={classes.appLink} to="/">{appName}</Link>
            </Typography>
            <Link className={classes.a} to="/events">
              <Button raised className={classes.button}>Events</Button>
            </Link>
            <Link className={classes.a} to="/organizations">
              <Button raised className={classes.button}>Organizations</Button>
            </Link>
            <TextField
              id="email"
              label="E-Mail"
              className={classes.input}
              type="email"
              marginForm
            />
            <TextField
              id="password"
              label="Password"
              className={classes.input}
              type="password"
              marginForm
            />
            <Button raised color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styleSheet)(Header));
