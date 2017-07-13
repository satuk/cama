/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {AppBar, Button, Grid, Input, Toolbar, Typography} from "material-ui";
import {Link} from "react-router-dom";
import {colors} from "../../utils/theme";

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
  a: {
    textDecoration: 'none',
  },
  appLink: {
    color: '#FF9902',
    textDecoration: 'none',
    fontFamily: 'Comfortaa, cursive',
    fontSize: 52,
  },
  footer: {
    padding: '80px 50px 120px',
    borderTop: '1px solid' + colors.dark4,
    marginTop: 120,
  },
}));

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              type="title"
              className={classes.flex}
            >
              <Link className={classes.appLink} to="/">
                {appName}
              </Link>
            </Typography>
            <Link className={classes.a} to="/events">
              <Button raised className={classes.button}>Events</Button>
            </Link>
            <Link className={classes.a} to="/organizations">
              <Button raised className={classes.button}>Organizations</Button>
            </Link>
            <Input
              id="email"
              label="E-Mail"
              type="email"
              placeholder="e-mail"
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="password"
            />
            <Button raised>Login</Button>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {
            this.props.children
          }
        </div>
        <div className={classes.footer}>
          <Grid container gutter={24}>
            <Grid item md={6}>
              <Typography type="display1" gutterBottom>
                Contact
              </Typography>
              <Typography type="title">
                cama AG
              </Typography>
              <Typography>
                Bahnhofstrasse 100
              </Typography>
              <Typography>
                8000 Zürich
              </Typography>
              <Typography>
                +41 444 55 66
              </Typography>
              <Typography>
                info@cama.ch
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography type="display1" gutterBottom>
                Information
              </Typography>
              <Typography>
                cama is a plattform for the easy recruiment and organizations for part-time worker.
              </Typography>
              <Typography>
                Closed customer-specific tools are also available on request. We would be pleased to advise you on a
                personal meeting.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styleSheet)(Header));
