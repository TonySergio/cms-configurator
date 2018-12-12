import { Component, PureComponent } from "react";
import { inject, observer } from "mobx-react";
import { Page, ScrollBar, FieldContainer } from "components";
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Button,
  Radio,
  message
 } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
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

            <Row gutter={8}>
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
                  <FormItem label={`Number of Monitors`} hasFeedback {...formItemLayout}>
                    {getFieldDecorator('monitors', {
                        rules: [
                          { required: true, message: 'Please select monitors' },
                        ]
                    })(
                        <Select placeholder="All">
                          <Option value="1">1</Option>
                          <Option value="2">2</Option>
                          <Option value="3">3</Option>
                        </Select>
                    )
                    }
                  </FormItem>
                  <FormItem label={`Progressive Configuration`} hasFeedback {...formItemLayout}>
                    {getFieldDecorator('progressiveConfigurationType', {
                        rules: [
                          {
                            required: true,
                            message: 'This very important',
                            type: 'string'
                          }
                        ]
                    })(
                      <Radio.Group defaultValue="1" buttonStyle="solid" >
                        <Radio.Button value="1">Mega Digital Sign</Radio.Button>
                        <Radio.Button value="2">Regular Digital Sign</Radio.Button>
                        <Radio.Button value="3">Digital Toppers</Radio.Button>
                        <Radio.Button value="4">Without Sign</Radio.Button>
                      </Radio.Group>
                    )
                  }
                  </FormItem>


                </FieldContainer>
            </Col>

          </Row>

              <Row>
                <Col span={24} style={ { textAlign: 'right' } }>
                  <FormItem wrapperCol={ {span: 12, offset: 6} }>
                      <Button type="primary" htmlType="submit" onClick={this.handleOk}>Apply</Button>
                  </FormItem>
                </Col>
              </Row>

            </Form>
        </Page>
      )
  }

  handleOk = () => {
    const {  validateFields, getFieldsValue, getFieldsError } = this.props.form;

    this.props.form.validateFields(errors => {
      if (errors) {
        message.error('Validation Error');
        return
      }

      const dataForm = {
        ...getFieldsValue()
      }

      message.loading('Saving in progress..', 2.5)
            .then(() => message.success('Saved successfully', 2.5))


    });
  }

}
