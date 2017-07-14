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
import Logo from "../../components/OrganizationLogo";
import {Grid, Paper, Typography} from "material-ui";
import {colors, gradients} from "../../utils/theme";

const styles = {
  paper: {
    padding: 50,
  },
  overrideLogo: {
    background: gradients.dark4ToDark1,
    margin: '20px 20px 20px 0',
  },
  a: {
    color: colors.yellow,
    textDecoration: 'none',
  },
  upComing: {
    margin: '50px 0',
  },
  companyHeader: {
    display: 'flex',
    alignItems: 'center',
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
        <Grid container gutter={24} style={styles.companyHeader}>
          <Grid item lg={3}>
            <Logo src={organization.logo} alt={organization.name} style={styles.overrideLogo}/>
          </Grid>
          <Grid item lg>
            <Typography type="display1" gutterBottom>
              {organization.name}
            </Typography>
            <Typography type="caption" gutterBottom>
              {organization.description}
            </Typography>
            <Typography type="title" gutterBottom>
              {`${organization.address}, ${organization.postalCode} ${organization.city}`}
            </Typography>
            <Typography type="body1" gutterBottom>
              <a style={styles.a} href={organization.url} target="_blank">{organization.url}</a>
            </Typography>
          </Grid>
        </Grid>
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

