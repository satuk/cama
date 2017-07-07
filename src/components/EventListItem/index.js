/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import {TableCell, TableRow} from "material-ui/Table";
import moment from "moment";


const EventListItem = (props) => {
  const { event } = props;
  const eventDate = moment(event.eventDate).format('DD.MM.YYYY');
  const eventStart = moment(event.startEvent).format('HH:MM');
  const eventEnd = moment(event.eventEnd).format('HH:MM');
  return (
    <TableRow key={event.id}>
      <TableCell>
        Org. name
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
    </TableRow>
  );
};

export default EventListItem;
