import { Component, PureComponent } from "react";
import { inject, observer } from "mobx-react";
import { Page, ScrollBar, FieldContainer } from "components";
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Button
 } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

@Form.create()
export default class ConfigurationPage extends PureComponent {
  render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Page inner>
            <Form layout="horizontal">

            <Row gutter={24}>
              <Col span={12}>
                <FormItem label={`Choose the Jurisdiction`} hasFeedback {...formItemLayout}>
                  {getFieldDecorator('jurisdiction', {
                      rules: [
                        { required: true, message: 'Please select Jurisdiction' },
                      ]
                  })(
                      <Select placeholder="All">
                        <Option value="1">Mexico</Option>
                        <Option value="2">Peru</Option>
                      </Select>
                  )
                  }
                </FormItem>
              </Col>
              <Col span={12}>
                <FieldContainer>
                  <FormItem label={`Choose the Burisdiction`} hasFeedback {...formItemLayout}>
                    {getFieldDecorator('ourisdiction', {
                        rules: [
                          { required: true, message: 'Please select Jurisdiction' },
                        ]
                    })(
                        <Select placeholder="All">
                          <Option value="1">Mexico</Option>
                          <Option value="2">Peru</Option>
                        </Select>
                    )
                    }
                  </FormItem>
                </FieldContainer>
            </Col>

          </Row>

              <Row>
                <Col span={24} style={ { textAlign: 'right' } }>
                  <FormItem wrapperCol={ {span: 12, offset: 6} }>
                      <Button type="primary" htmlType="submit">Apply</Button>
                  </FormItem>
                </Col>
              </Row>

            </Form>
        </Page>
      )
  }

  handleOk = () => {

  }

}
