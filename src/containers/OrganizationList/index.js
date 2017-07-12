/**
 * Created by satuk on 10.07.17.
 */
import React from "react";
import OrganizationListItem from "../../components/OrganizationListItem";
import Container from "../../components/Container";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import Typography from 'material-ui/Typography';


const styleSheet = createStyleSheet('OrganizationList', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
}));

const OrganizationList = (props) => {

  const { classes } = props;
  const { organizations } = props;

  return (
    <Container className={classes.root}>
      <Typography type="display1" gutterBottom>
        Organizations
      </Typography>
      <Grid container gutter={24}>
        {
          organizations.map((org) => {
            return <OrganizationListItem org={org} key={org.id}/>;
          })
        }
      </Grid>
    </Container>
  );
};

OrganizationList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(OrganizationList);
