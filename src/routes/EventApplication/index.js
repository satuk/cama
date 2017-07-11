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
import {fetchEventsByCompany} from "../../store/actions/events";
import {connect} from "react-redux";
import Loading from "../../components/Loading";

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

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = 'AIzaSyCKRZ6oUthD6PNR4cQP56Mu7C32nr1xfh4';

class EventApplication extends Component {

  componentDidMount() {
    this.props.fetchEventsByCompany(this.props.match.params.organization_id);
  }

  render() {
    const { eventsByCompany } = this.props;
    const id = parseInt(this.props.match.params.event_id);
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
              <Typography type="headline" component="h1">
                {curr.eventName} • {curr.eventDate}
              </Typography>
            </Grid>
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
                  <AnyReactComponent
                    lat={47.3768870}
                    lng={8.5416940}
                    text={'Zurich'}
                  />
                </GoogleMapReact>
              </div>
            </Grid>
            <Grid item xs={12}>
              {curr.description}
              information about the event
            </Grid>
          </Grid>

          <Grid container gutter={24}>
            <Grid item xs={12}>
              <h1>Future Events</h1>
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

const mapStateToProps = (state) => {
  const eventsByCompany = Object.values(state.events);

  return {
    eventsByCompany,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchEventsByCompany: (id) => dispatch(fetchEventsByCompany(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(EventApplication));
