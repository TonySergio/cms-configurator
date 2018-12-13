import { Component } from "react";
import { inject, observer } from "mobx-react";
import { observable, action } from "mobx";
import { Button, Rate, Row, Col, DatePicker  } from "antd";
import Link from "umi/link";
import { Page } from 'components';

const {  RangePicker } = DatePicker;

@inject(rootStore => ({
    Home: rootStore.stores.Home
}))
@observer
class App extends Component {
  @observable value = 0;

  @action.bound
  plus() {
    this.value = this.value + 1;
  }

  render() {
    return (
      <Page inner>
        <div>
        <h1>Hello! This is Welcome Page</h1>
          <Row>
            <Col span={12}>
              <Link to="/configurations">Go to Configurations list</Link>
            </Col>
          </Row>
        </div>
      </Page>
    );
  }
}

export default App;
