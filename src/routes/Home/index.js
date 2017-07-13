/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";
import Welcome from "../../components/Welcome";
import {connect} from "react-redux";
import {fetchOrganizations} from "../../store/actions/organizations";

class Home extends Component {
  componentDidMount() {
    this.props.fetchOrganizations();
  }

  render() {
    return (
      <Welcome organizations={this.props.organizations}/>
    );
  }
}

const mapStateToProps = (state) => {
  const organizations = Object.values(state.organizations).map(org => {
    return {
      id: org.id,
      logo: org.logo,
      alt: org.name,
    }
  });

  return {
    organizations,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrganizations: () => dispatch(fetchOrganizations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
