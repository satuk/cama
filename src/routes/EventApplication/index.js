/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import Container from "../../components/Container";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {Grid, Paper, Typography} from "material-ui";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import EventList from "../../components/EventList";
import {fetchEvents} from "../../store/actions/events";
import {connect} from "react-redux";
import Loading from "../../components/Loading";
import OrganizationInfo from "../../components/OrganizationInfo";

const styleSheet = createStyleSheet('EventApplication', theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
}));

const defaultProps = {
  center: { lat: 47.376887, lng: 8.5416940 },
  zoom: 14,
};

const Marker = ({ text }) => <div
  style={{ backgroundColor: 'black', height: 50, width: 50, color: 'white', }}>{text}</div>;
const API_KEY = 'AIzaSyCKRZ6oUthD6PNR4cQP56Mu7C32nr1xfh4';

class EventApplication extends Component {
  componentDidMount() {
    if ( Object.keys(this.props.eventsByCompany).length === 0 ) {
      this.props.fetchEvents();
    }
  }

  render() {

    console.log("this.props", this.props);

    const { eventsByCompany } = this.props;
    const id = parseInt(this.props.match.params.event_id, 10);
    const currentEvent = eventsByCompany.filter(e => e.id === id);
    const curr = Object.values(currentEvent)[0];
    const withOutCurrentEvent = eventsByCompany.filter(e => e.id !== id);

    console.log(curr);

    if ( !this.props.eventsByCompany.length ) {
      return <Loading />
    }

    return (
      <Container>
        <Paper>
          <Grid container gutter={24}>
            <Grid item xs={12}>
              <div style={{ width: '100%', height: '300px', }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: API_KEY,
                    language: 'de',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <Marker
                    lat={47.3768870}
                    lng={8.5416940}
                    text={curr.company.name}
                  />
                </GoogleMapReact>
              </div>
            </Grid>
          </Grid>


          <Grid container gutter={24}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography type="display1">
                  {curr.name} • {curr.date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container gutter={24}>
            <Grid item md={6}>
              <Typography type="title" gutterBottom>
                Description: {curr.description}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography type="title" gutterBottom>
                Expected Quests: {curr.expectedPerson}
              </Typography>
            </Grid>
          </Grid>

          <Grid container gutter={24}>
            <Grid item xs={12}>
              <Typography type="display1">
                Location:
              </Typography>
            </Grid>
            <OrganizationInfo org={curr.company}/>
          </Grid>

          <Grid container gutter={24}>
            <Grid item md={12}>
              <Typography type="display1">Future Events</Typography>
              <EventList events={withOutCurrentEvent}/>
            </Grid>
          </Grid>

        </Paper>
      </Container>
    );
  }
}

EventApplication.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {

  console.log("props", props);

  const eventsByCompany = Object.values(state.events).filter(event => event.company.id == props.match.params.organization_id);

  return {
    eventsByCompany,
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(EventApplication));
