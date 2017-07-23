/**
 * Created by satuk on 07.07.17.
 */
import React from "react";
import Grid from "material-ui/Grid";
import welcomeImage from "./intro-image.jpg";
import Container from "../Container";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Icon from "material-ui/Icon";
import {colors, gradients} from "../../utils/theme";
import {CircularProgress} from "material-ui/Progress";
import Logo from "../../components/OrganizationLogo";
import {Link} from "react-router-dom";

const styles = {
  become: {
    padding: '50px',
    justifyContent: 'center',
    display: 'flex',
  },
  intro: {
    position: 'absolute',
    width: 'calc(100% - 100px)',
    bottom: '-40px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '100px 50px',
    color: 'white',
    fontSize: '52',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.orange,
    width: 150,
    color: colors.dark1,
    fontSize: 18,
  },
  how: {
    padding: 50,
    marginTop: 120,
  },
  paperHow: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: 'calc(100% - 150px)',
  },
  typoHow: {
    paddingTop: 50,
  },
  business: {
    color: colors.yellow,
    fontSize: 350,
  },
  recruitments: {
    color: colors.yellow,
    fontSize: 58,
  },
  staff: {
    color: colors.yellow,
    fontSize: 62,
  },
  circle: {
    height: 350,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid' + colors.orange,
    borderRadius: 300,
    width: 350,
  },
  happy: {
    padding: 50,
    marginTop: 120,
  },
  happyImg: {
    padding: 20,
    width: 125,
    height: 125,
    objectFit: 'scale-down',
    background: gradients.dark3ToDark2,
    margin: 20,
  },
};

const Welcome = (props) => (
  <div>
    <div>
      <Grid container gutter={24}>
        <Grid item xs={12}>
          <div style={{ position: 'relative', width: '100%', }}>
            <img src={welcomeImage} alt="intro" style={{ width: '100%' }}/>
            <h2 style={styles.intro}>
              Recruit Staff Members, Coordinate and Organize.
            </h2>
          </div>
        </Grid>
      </Grid>
    </div>
    <Container>
      <Grid container gutter={24}>
        <Grid item xs={12} md={6}>
          <Paper style={styles.become}>
            <Grid item md={10}>
              <Typography type="display1" gutterBottom>
                Become a staff member
              </Typography>
              <Typography type="subheading" gutterBottom>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam
              </Typography>
              <Button raised style={styles.button}>Apply</Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.become}>
            <Grid item md={10}>
              <Typography type="display1" gutterBottom>
                Become an event manager
              </Typography>
              <Typography type="subheading" gutterBottom>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam
              </Typography>
              <Button raised style={styles.button}>Apply</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Paper style={styles.how}>
        <Grid container gutter={24}>
          <Grid item xs>
            <Typography type="display1" gutterBottom>
              How it Works
            </Typography>
          </Grid>
        </Grid>
        <Grid container gutter={24}>
          <Grid item xs={12} md={4}>
            <Typography type="title" style={styles.title}>
              Organizations
            </Typography>
            <Paper style={styles.paperHow}>
              <Icon style={styles.business}>business</Icon>
              <Typography type="subheading" style={styles.typoHow}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
                Stet clita kasd gubergren, no sea takimata sanct.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography type="title">
              Staff Members
            </Typography>
            <Paper style={styles.paperHow}>
              <div style={styles.circle}>
                <Icon style={styles.staff}>person</Icon>
                <Icon style={styles.staff}>person</Icon>
                <Icon style={styles.staff}>person</Icon>
                <Icon style={styles.staff}>person</Icon>
                <Icon style={styles.staff}>person</Icon>
              </div>
              <Typography type="subheading" style={styles.typoHow}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
                Stet clita kasd gubergren, no sea takimata sanct.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography type="title">
              Recruitments
            </Typography>
            <Paper style={styles.paperHow}>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <div>
                <Icon style={styles.recruitments}>person</Icon>
              </div>
              <Typography type="subheading" style={styles.typoHow}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
                Stet clita kasd gubergren, no sea takimata sanct.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={styles.happy}>
        <Grid container gutter={24}>
          <Grid item xs>
            <Typography type="display1" gutterBottom>
              Happy Customers
            </Typography>
            <div>
              {!props.organizations.length ? (
                <div style={{ display: 'flex', justifyContent: 'center', }}><CircularProgress size={50}/></div>
              ) : (
                Object.values(props.organizations).map(org =>
                  <Link to={'/organizations/' + org.id + '/events'} key={org.id} >
                    <Logo src={org.logo}
                          alt={org.alt}/>
                  </Link>)
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </div>
);

export default Welcome;
