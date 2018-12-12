import { Component, PureComponent } from "react";
import { inject, observer } from "mobx-react";
import { Page, ScrollBar } from "components";
import {
  Form,
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

              <FormItem wrapperCol={ {span: 12, offset: 6} }>
                  <Button type="primary" htmlType="submit">Submit</Button>
              </FormItem>

            </Form>
        </Page>
      )
  }

  handleOk = () => {

  }

}
