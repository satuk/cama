/**
 * Created by satuk on 07.07.17.
 */
import React, {Component} from "react";
import {fetchEvents} from "../../store/actions/events";
import {connect} from "react-redux";
import Loading from "../Loading";
import Table, {TableBody, TableCell, TableHead, TableRow} from "material-ui/Table";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Paper from "material-ui/Paper";
import Container from "../../components/Container";
import EventListItem from "../../components/EventListItem";


const styleSheet = createStyleSheet('BasicTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if ( !this.props.events.length ) {
      return <Loading />;
    }

    const { events } = this.props;
    const { classes } = this.props;
    console.log(events);
    return (
      <Container>
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Organization</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Functions</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                events.map((event, index) => {
                  return <EventListItem key={index} event={event} />
                })
              }
            </TableBody>
          </Table>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const events = Object.values(state.events);

  return {
    events,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(EventList));
