/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import moment from "moment";
import {Button, Grid} from "material-ui";
import {Link} from "react-router-dom";
import Paper from "material-ui/Paper";

const EventListItem = (props) => {
  const { event } = props;
  const { classes } = props;

  const date = moment(event.date).format('DD.MM.YYYY');
  const start = moment(event.start).format('HH:MM');
  const end = moment(event.end).format('HH:MM');
  const org_id = event.company.id;
  const event_id = event.id;

  return (
    <Paper style={{ marginTop: 24, }}>
      <Grid container gutter={24} style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center',}} >
        <Grid item xs={12} md={3} >
          <img src={event.logo}
               style={{
                 width: '100%',
                 height: '125',
                 objectFit: 'cover',
                 overflow: 'hidden',
                 paddingLeft: 12,
               }}
               alt={event.description}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </Grid>
        <Grid item xs={12} md={3}>
          <p>{event.company.name}</p>
          <p>{event.company.address}</p>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link to={'/organizations/' + org_id + '/events/' + event_id + '/apply'} style={{ textDecoration: 'none', }}>
            <Button raised>Apply</Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EventListItem;
