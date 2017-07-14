/**
 * Created by satuk on 10.07.17.
 */
import React, {Component} from "react";
import EventList from "../../components/EventList";
import {fetchEvents, searchEvents} from "../../store/actions/events";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import Typography from "material-ui/Typography";
import {Button, Paper, TextField} from "material-ui";
import Icon from "material-ui/Icon";
import qs from "query-string";

const styles = {
  search: {
    borderRadius: 20,
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    marginTop: '30',
  },
  searchIcon: {
    padding: '20px 30px',
    color: 'white',
    fontSize: '52px',
  },
};

class Events extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.fetchEvents();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.searchEvents(this.state.search);
    this.props.history.push({ pathname: '/events/search', search: qs.stringify({ query: this.state.search }) });
  };

  render() {
    const { events } = this.props;

    console.log("this.props", this.props);

    console.log("this.props.location.query", this.props.location.query);


    if ( !this.props.events ) {
      return <Loading />;
    }

    return (
      <Container>
        <Typography type="display2">All Events</Typography>
        <Paper style={styles.paper}>
          <Icon style={styles.searchIcon}>search</Icon>

          <form onSubmit={this.handleSubmit} style={{ width: '100%', }}>
            <TextField
              type="input"
              InputProps={{ placeholder: 'Search upcoming Events' }}
              fullWidth
              marginForm
              style={styles.search}
              onChange={e => this.setState({ search: e.target.value })}
              value={this.state.search}
            />
          </form>

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
  searchEvents: (query) => dispatch(searchEvents(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Events));
