import { inject, observer } from 'mobx-react';
import { Button, Rate, Row, Col } from 'antd';
import Link from 'umi/link';
import * as React from 'react';
import styles from './index.less';




class IndexPage extends React.Component {
    render() {
      return (
      <div>
        <Row>
          <Col span={12}>
            <Link to="/list">Go to list page</Link>
          </Col>
          <Col span={12}>
            <Rate allowHalf defaultValue={5} />
            <h2>{props.name}</h2>
            <Button
              type="primary"
              onClick={() => {
                props.setTitle('new name');
                console.log('click');
              }}
            >
              XZ
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default inject(({ stores }) => ({
  name: stores.Home.name,
  setTitle: stores.Home.setTitle,
}))(observer( IndexPage));
