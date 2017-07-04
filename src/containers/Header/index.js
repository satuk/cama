/**
 * Created by satuk on 04.07.17.
 */
import React, {Component} from "react";

const styles = {
  content: {
    backgroundColor: 'white',
    height: '100%',
  },
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
