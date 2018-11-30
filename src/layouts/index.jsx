import { Component } from 'react';

import styles from './index.less';


class BasicLayout extends Component {
  constructor(props) {
    super (props);
  }

  state = {
    collapsed: false
  }


  render() {
    return (
      <div>
        <div>This is Header</div>
        {this.props.children}
      </div>
    );
  }
}

export default BasicLayout;
