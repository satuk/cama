/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import Table, {TableBody, TableCell, TableHead, TableRow} from "material-ui/Table";
import Container from "../../components/Container";
import EventListItem from "../../components/EventListItem";
import Paper from "material-ui/Paper";

const EventList = (props) => {

  const { events } = props;
  
  return (
    <Container>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Organization</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Functions</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              events.map((event, index) => {
                return <EventListItem key={index} event={event}/>
              })
            }
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default EventList;
