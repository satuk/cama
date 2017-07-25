/**
 * Created by satuk on 25.07.17.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, {Tab} from "material-ui/Tabs";
import AccountIcon from "material-ui-icons/AccountCircle";
import AttacheFileIcon from "material-ui-icons/AttachFile";
import SendIcon from "material-ui-icons/Send";
import Container from "../../components/Container";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';

const TabContainer = props =>
  <div style={{ padding: 24 }}>
    {props.children}
  </div>;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('Join', theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
}));

class Join extends Component {
  state = {
    index: 0,
    name: '',
    email: '',
    password: '',
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const classes = this.props.classes;

    return (
      <Container>
        <Grid container gutter={24}>
          <Grid item lg={3}/>
          <Grid item lg={6} md={12} xs={12}>
            <Paper>
              <AppBar position="static" color="default">
                <Tabs
                  index={this.state.index}
                  onChange={this.handleChange}
                  scrollable
                  scrollButtons="on"
                  indicatorColor="primary"
                >
                  <Tab label="Personal" icon={<AccountIcon />}/>
                  <Tab label="Attach file" icon={<AttacheFileIcon />}/>
                  <Tab label="Send" icon={<SendIcon />}/>
                </Tabs>
              </AppBar>
              {this.state.index === 0 &&
              <TabContainer>
                {
                  <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="name">Firstname & Lastname</InputLabel>
                      <Input id="name" value={this.state.name} onChange={this.handleChangeName} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="name">Email</InputLabel>
                      <Input id="email" value={this.state.email} onChange={this.handleChangeEmail} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="name">Password</InputLabel>
                      <Input id="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </FormControl>
                  </div>
                }
              </TabContainer>}
              {this.state.index === 1 &&
              <TabContainer>
                {'attach file'}
              </TabContainer>}
              {this.state.index === 2 &&
              <TabContainer>
                {'send'}
              </TabContainer>}
            </Paper>
          </Grid>
          <Grid item lg={3}/>
        </Grid>
      </Container>
    );
  }
}

Join.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Join);
