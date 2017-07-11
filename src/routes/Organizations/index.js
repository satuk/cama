/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import OrganizationList from "../../containers/OrganizationList";
import {connect} from "react-redux";
import {fetchOrganizations} from "../../store/actions/organizations";
import {fetchEventsByCompany} from "../../store/actions/events";
import Loading from "../../components/Loading";


class Organizations extends Component {

  componentDidMount() {
    this.props.fetchOrganizations();
  }

  render() {
    const { classes } = this.props;
    const { organizations } = this.props;

    if ( !organizations.length ) {
      return <Loading />;
    }

    return (
      <OrganizationList classes={classes} organiizations={organizations}/>
    );
  }
}

const mapSateToProps = (state) => {
  const organizations = Object.values(state.organizations);
  const eventsByCompany = Object.values(state.events);

  return {
    organizations,
    eventsByCompany,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrganizations: () => dispatch(fetchOrganizations()),
  fetchEventsByCompany: (id) => dispatch(fetchEventsByCompany(id)),
});

export default connect(mapSateToProps, mapDispatchToProps)(Organizations);
