/**
 * Created by satuk on 07.07.17.
 */
import React, {Component} from "react";
import {fetchEvents} from "../../store/actions/events";
import {connect} from "react-redux";


class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        {
          events.map((event, index) => {
            return <li key={index}>{event.eventName}</li>
          })
        }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
