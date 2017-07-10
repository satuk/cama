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


const styleSheet = createStyleSheet('OrganizationList', theme => ({
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
  cardAction: {
    backgroundColor: '#575757',
    justifyContent: 'space-around',
  },
  cardMedia: {
    // minHeight: 460,
  },
  img: {
    width: '100%',
  },
}));

const OrganizationListItem = (props) => {
  const { classes } = props;
  const { org } = props;

  return (
    <Grid item md={3} sm={6} xs={12}>
      <Card className={classes.cardMedia}>
        <CardMedia style={{
          root: classes.cardMedia,
        }}>
          {/*<img className={classes.img} src={org.logo} alt={org.description}/>*/}
          <img className={classes.img} src={'http://placehold.it/500x400?text=' + org.name} alt={org.description}/>
        </CardMedia>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            Events of this month:
          </Typography>
          <Typography type="headline" component="h2">
            {org.name}
          </Typography>
          <Typography component="p">
            {org.description}
          </Typography>
          <Typography component="p">
            {org.address}, {org.postalCode} {org.city}
          </Typography>
        </CardContent>
        <CardActions
          classes={{
            root: classes.cardAction,
          }}
        >
          <Link to={'/organizations/' + org.id + '/apply'} className={classes.a}>
            <Button raised className={classes.button}>
              Apply
            </Button>
          </Link>
          <Link to={'/organizations/' + org.id + '/events'} className={classes.a}>
            <Button raised className={classes.button}>
              Events
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
    ;
};

OrganizationListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(OrganizationListItem);
