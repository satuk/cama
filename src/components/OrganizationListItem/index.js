/**
 * Created by satuk on 10.07.17.
 */
import React from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Card, {CardActions, CardContent, CardMedia} from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import {Link} from "react-router-dom";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import {colors} from "../../utils/theme";

const styleSheet = createStyleSheet('OrganizationListItem', theme => ({
  card: {
    maxWidth: 345,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  button: {
    margin: 12,
  },
  a: {
    textDecoration: 'none',
  },
  img: {
    width: 'calc(100% - 40px)',
    height: '250px',
    objectFit: 'scale-down',
    background: colors.dark4,
    padding: 20,
  },
}));


const OrganizationListItem = (props) => {
  const { classes } = props;
  const { org } = props;

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.card}>
        <CardMedia>
          <img className={classes.img} src={org.logo} alt={org.description}/>
        </CardMedia>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            <Chip
              avatar={<Avatar>{org.numberOfEvents === 0 ? '0' : org.numberOfEvents}</Avatar>}
              label="Total Events"
              className={classes.chip}
            />
          </Typography>
          <Typography type="headline" component="h2">
            {org.name}
          </Typography>
          <Typography component="p">
            {org.description}
          </Typography>
          <Typography component="p">
            {org.address} • {org.postalCode} {org.city}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={'/organizations/' + org.id + '/apply'} className={classes.a}>
            <Button raised className={classes.button}>
              Apply
            </Button>
          </Link>
          {org.publicEvents ? (
            <Link to={'/organizations/' + org.id + '/events'} className={classes.a}>
              <Button raised className={classes.button}>
                Events
              </Button>
            </Link>
          ) : (
            ''
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

OrganizationListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(OrganizationListItem);
