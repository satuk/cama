/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import {TableCell, TableRow} from "material-ui/Table";
import moment from "moment";
import Button from "material-ui/Button";
import {Link} from "react-router-dom";

const EventListItem = (props) => {
  const { event } = props;
  const eventDate = moment(event.eventDate).format('DD.MM.YYYY');
  const eventStart = moment(event.startEvent).format('HH:MM');
  const eventEnd = moment(event.eventEnd).format('HH:MM');
  const org_id = event.company.id;
  const event_id = event.id;

  return (
    <TableRow key={event.id}>
      <TableCell>
        {event.company.name}
      </TableCell>
      <TableCell>
        {event.eventName}
      </TableCell>
      <TableCell>
        {eventDate}
      </TableCell>
      <TableCell>
        {event.id}
      </TableCell>
      <TableCell>
        {
          `${eventStart} - ${eventEnd}`
        }
      </TableCell>
      <TableCell>
        <Link to={'/organizations/' + org_id + '/events/' + event_id + '/apply'} style={{ textDecoration: 'none', }}>
          <Button raised>
            Apply
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default EventListItem;
