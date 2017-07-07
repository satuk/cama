/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {LinearProgress} from "material-ui/Progress";

const styleSheet = createStyleSheet('Loading', theme => ({
  root: {
    width: '100%',
    marginTop: 64,
  },
}));


const Loading = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>

  );
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Loading);
