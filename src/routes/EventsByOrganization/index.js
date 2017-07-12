/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList/index";
import {connect} from "react-redux";
import {fetchEvents} from "../../store/actions/events";
import Loading from "../../components/Loading";

class EventsByOrganization extends Component {

  componentDidMount() {
    if ( !this.props.eventsByCompany.length ) {
      this.props.fetchEvents();
    }
  }

  render() {
    const { eventsByCompany } = this.props;

    if ( !this.props.eventsByCompany.length ) {
      return <Loading />;
    }

    return (
      <EventList events={eventsByCompany}/>
    );
  }
}

const mapStateToProps = (state, props) => {
  const eventsByCompany = Object.values(state.events)
    .filter(event => event.company.id == props.match.params.id);

  return {
    eventsByCompany,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsByOrganization);

