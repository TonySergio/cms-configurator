import { Component } from "react";
import { inject, observer } from "mobx-react";
import { observable, action } from "mobx";
import { Button, Rate, Row, Col, DatePicker  } from "antd";
import Link from "umi/link";

const {  RangePicker } = DatePicker;

@inject("stores")
@observer
class App extends Component {
  @observable value = 0;

  @action.bound
  plus() {
    this.value = this.value + 1;
  }

  onChangeDate (date, dateString) {
    console.log(date, dateString);
  }


  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Link to="/list">Go to list page</Link>
          </Col>
          <Col span={12}>
            <Rate allowHalf defaultValue={5} />
            <h2>{this.props.stores.Home.name}</h2>
            <Button
              type="primary"
              onClick={() => {
                this.props.stores.Home.setTitle("new name");
                console.log("click");
              }}
            >
              yo
            </Button>
          </Col>
        </Row>
        <Row>
          <div>Value: {this.value * 2}</div>
          <Button onClick={this.plus}>Plus</Button>
        </Row>
        <Row>
          <RangePicker onChange={this.onChangeDate} />

        </Row>  
      </div>
    );
  }
}

export default App;