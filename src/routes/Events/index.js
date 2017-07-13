/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList";
import {fetchEvents} from "../../store/actions/events";
import {connect} from "react-redux";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import Typography from "material-ui/Typography";
import {Button, Paper, TextField} from "material-ui";
import Icon from "material-ui/Icon";

const styles = {
  search: {
    borderRadius: 20,
  },
};

class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    if ( !this.props.events ) {
      return <Loading />;
    }

    return (
      <Container>
        <Typography type="display2">All Events</Typography>
        <Paper style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          marginTop: '30',
        }}>
          <Icon style={{ padding: '20px 30px', color: 'white', fontSize: '52px', }}>search</Icon>
          <TextField
            id="search"
            type="text"
            InputProps={{ placeholder: 'Search upcoming Events' }}
            fullWidth
            marginForm
            style={styles.search}
          />
        </Paper>
        <div style={{ marginTop: '30px', marginBottom: '45px', }}>
          <Button raised color="primary">All</Button>
          <Button raised color="primary">My Organizations</Button>
        </div>
        <EventList events={events}/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const events = Object.values(state.events).filter(event => event.company.publicEvents);

  return {
    events,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
