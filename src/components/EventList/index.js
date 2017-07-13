/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import PropTypes from "prop-types";
import EventListItem from "../../components/EventListItem";
import Container from "../Container";
import Typography from "material-ui/Typography";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {Button, Paper, TextField} from "material-ui";
import Icon from "material-ui/Icon";


const styleSheet = createStyleSheet('EventList', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  search: {
    borderRadius: 20,
  }
}));

const EventList = (props) => {
  const { events } = props;
  const { classes } = props;

  return (
    <Container>
      <Typography type="display2">All Events</Typography>
      <Paper style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        marginTop: '30',
      }}>
        <Icon style={{ padding: '20px 30px', color: 'white', fontSize: '52px', }}>search</Icon>
        <TextField
          id="search"
          type="text"
          InputProps={{ placeholder: 'Search upcoming Events' }}
          fullWidth
          marginForm
          classes={classes.search}
        />
      </Paper>
      <div style={{ marginTop: '30px', marginBottom: '45px', }}>
        <Button raised color="primary">All</Button>
        <Button raised color="primary">My Organizations</Button>
      </div>
      {
        events.map((event, index) => <EventListItem key={index} event={event} size={events.length} classes={classes}/>)
      }
    </Container>
  );
};

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(EventList);
