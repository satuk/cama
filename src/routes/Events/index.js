/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList";
import {fetchEvents} from "../../store/actions/events";
import {connect} from "react-redux";
import Loading from "../../components/Loading";

class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    if ( !this.props.events ) {
      return <Loading />;
    }

    return (
      <EventList events={events}/>
    );
  }
}

const mapStateToProps = (state) => {
  const events = Object.values(state.events).filter(event => event.company.publicEvents);

  return {
    events,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
