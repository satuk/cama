/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import OrganizationList from "../../containers/OrganizationList";
import {connect} from "react-redux";
import {fetchOrganizations} from "../../store/actions/organizations";
import {fetchEvents} from "../../store/actions/events";
import Loading from "../../components/Loading";


class Organizations extends Component {

  componentDidMount() {
    this.props.fetchOrganizations();
    if ( Object.keys(this.props.events).length === 0 ) {
      this.props.fetchEvents();
    }
  }

  render() {
    const { classes } = this.props;
    const { organizations } = this.props;

    if ( !organizations.length ) {
      return <Loading />;
    }

    return (
      <OrganizationList classes={classes} organizations={organizations}/>
    );
  }
}

const mapSateToProps = (state) => {
  const organizations = Object.values(state.organizations);
  const events = Object.values(state.events);

  organizations.map(org => org.numberOfEvents = events.filter(event => event.company.id === org.id).length);

  return {
    organizations,
    events,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrganizations: () => dispatch(fetchOrganizations()),
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapSateToProps, mapDispatchToProps)(Organizations);
