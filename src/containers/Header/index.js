/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";

const appName = "cama";
const styles = {
  content: {
    width: 960,
    margin: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {},
  app: {},
  buttonTextColor: {},
  toolbar: {
    backgroundColor: blue500,
    color: blue50,
    marginBottom: 50,
  }
};
};

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Header</h1>
        </div>
        <div style={styles.content}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

export default Header;
