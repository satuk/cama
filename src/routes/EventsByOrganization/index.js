/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList/index";
import {connect} from "react-redux";
import {fetchEvents} from "../../store/actions/events";
import {fetchOrganization} from "../../store/actions/organizations";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import {Paper, Typography} from "material-ui";
import {gradients} from "../../utils/theme";
import OrganizationInfo from '../../components/OrganizationInfo';

const styles = {
  paper: {
    padding: 50,
  },
  overrideLogo: {
    background: gradients.dark4ToDark1,
    margin: '20px 20px 20px 0',
  },
  upComing: {
    margin: '50px 0',
  },
};

class EventsByOrganization extends Component {
  componentDidMount() {
    if ( !this.props.eventsByCompany.length ) {
      this.props.fetchEvents();
      this.props.fetchOrganization(this.props.match.params.id);
    }
  }

  render() {

    if ( !Object.keys(this.props.organization).length ) {
      return <Loading />;
    }

    const { eventsByCompany } = this.props;
    const { id } = this.props.match.params;
    const organization = this.props.organization[id];

    return (
      <Container>
        <OrganizationInfo org={organization}/>
        {eventsByCompany.length ? (
          <div style={styles.upComing}>
            <Typography type="display1" gutterBottom>
              Up coming Events
            </Typography>
            <EventList events={eventsByCompany}/>
          </div>
        ) : (
          <Container>
            <Paper style={styles.paper}>
              <Typography type="title">
                {`The Company ${organization.name} has no events...`}
              </Typography>
            </Paper>
          </Container>
        )}

      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  const eventsByCompany = Object.values(state.events)
    .filter(e => e.company.id == props.match.params.id);
  const organization = state.organizations;

  return {
    eventsByCompany,
    organization,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchOrganization: (id) => dispatch(fetchOrganization(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsByOrganization);
