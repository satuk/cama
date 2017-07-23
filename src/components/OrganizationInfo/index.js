import React from "react";
import {Grid, Typography} from "material-ui";
import Logo from "../../components/OrganizationLogo";
import {colors} from '../../utils/theme';


const styles = {
  companyHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  a: {
    color: colors.yellow,
    textDecoration: 'none',
  },
};

const OrganizationInfo = (props) => {
  const { org } = props;

  return (
    <Grid container gutter={24} style={styles.companyHeader}>
      <Grid item lg={3}>
        <Logo src={org.logo} alt={org.name} style={styles.overrideLogo}/>
      </Grid>
      <Grid item lg>
        <Typography type="display1" gutterBottom>
          {org.name}
        </Typography>
        <Typography type="caption" gutterBottom>
          {org.description}
        </Typography>
        <Typography type="title" gutterBottom>
          {`${org.address}, ${org.postalCode} ${org.city}`}
        </Typography>
        <Typography type="body1" gutterBottom>
          <a style={styles.a} href={org.url} target="_blank">{org.url}</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrganizationInfo;
