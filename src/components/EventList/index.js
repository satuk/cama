/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import PropTypes from "prop-types";
import EventListItem from "../../components/EventListItem";
import {createStyleSheet, withStyles} from "material-ui/styles";

const styleSheet = createStyleSheet('EventList', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
}));

const EventList = (props) => {
  const { events } = props;
  const { classes } = props;

  return (
    <div>
      {
        events.map(e => <EventListItem key={e.id} event={e} size={e.length} classes={classes}/>)
      }
    </div>
  );
};

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(EventList);
