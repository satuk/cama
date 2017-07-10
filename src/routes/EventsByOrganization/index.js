/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList/index";
import {connect} from "react-redux";
import {fetchEventsByCompany} from "../../store/actions/events";
import Loading from "../../components/Loading";

class EventsByOrganization extends Component {

  componentDidMount() {
    this.props.fetchEventsByCompany(this.props.match.params.id);
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

const mapStateToProps = (state) => {
  const eventsByCompany = Object.values(state.events);

  return {
    eventsByCompany,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchEventsByCompany: (id) => dispatch(fetchEventsByCompany(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsByOrganization);
