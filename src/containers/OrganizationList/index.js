/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchOrganizations} from "../../store/actions/organizations";
import {fetchEventsByCompany} from "../../store/actions/events";
import Loading from "../../components/Loading";
import OrganizationListItem from "../../components/OrganizationListItem";
import Container from "../../components/Container";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";

const styleSheet = createStyleSheet('OrganizationList', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
}));

class OrganizationList extends Component {

  componentDidMount() {
    this.props.fetchOrganizations();
  }

  handleSize = (id) => {
   this.props.fetchEventsByCompany(id);
  };

  render() {
    if ( !this.props.organizations.length ) {
      return <Loading />;
    }

    const { classes } = this.props;
    const { organizations } = this.props;

    return (
      <Container className={classes.root}>
        <Grid container gutter={24}>
          {
            organizations.map((org, index) => {
              return <OrganizationListItem key={index} org={org} />;
            })
          }
        </Grid>
      </Container>
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

OrganizationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapSateToProps, mapDispatchToProps)(withStyles(styleSheet)(OrganizationList));
