/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import PropTypes from "prop-types";
import {createStyleSheet, withStyles} from "material-ui/styles";
import {LinearProgress} from "material-ui/Progress";
import {colors} from '../../utils/theme';

const styleSheet = createStyleSheet('Loading', theme => ({
  root: {
    width: '100%',
    marginTop: 64,
  },
  indeterminateBar1: {
    backgroundColor: colors.dark4,
  },
  indeterminateBar2: {
    backgroundColor: colors.dark4,
  },
  color: {
    backgroundColor: colors.orange,
  },
}));


const Loading = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress classes={{
        root: classes.color,
        indeterminateBar1: classes.indeterminateBar1,
        indeterminateBar2: classes.indeterminateBar2,
      }} />
    </div>

  );
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Loading);
