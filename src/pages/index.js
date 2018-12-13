import { inject, observer } from 'mobx-react';
import { Button, Rate, Row, Col } from 'antd';
import Link from 'umi/link';
import Redirect from 'umi/redirect';

function App(props) {
  return (
    <Redirect to="/home" />
  );
}

export default inject(({ stores }) => ({
  name: stores.Home.name,
  setTitle: stores.Home.setTitle,
}))(observer(App));
