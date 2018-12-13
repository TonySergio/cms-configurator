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
  message,
  Popconfirm,
 } from "antd";

 import List from './components/List';

 import styles from './configurations.less';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

@inject(rootStore => ({
    configurationsStore: rootStore.stores.ConfigurationsStore
}))
@Form.create()
@observer
export default class ConfigurationPage extends Component {
  render() {
      const { form, configurationsStore: store } = this.props;
      const { getFieldDecorator } = form;

      const {
        list,
        pagination,
        selectedRowKeys,
      } = store;

      return (
        <Page inner>
          <h1>JVL Hardware and Software Configurator</h1>
            <Form layout="horizontal" className={styles.filterForm}>

            <Row gutter={8}>
              <Col lg={12} md={24} sm={24}>
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

                <FormItem label={`Choose the Product`} hasFeedback {...formItemLayout}>
                  {getFieldDecorator('product', {
                      rules: [
                        { required: true, message: 'Please select Product' },
                      ]
                  })(
                      <Select placeholder="All">
                        <Option value="1">LCG</Option>
                        <Option value="2">HG5</Option>
                        <Option value="3">HG6</Option>
                        <Option value="4">COD</Option>
                      </Select>
                  )
                  }
                </FormItem>

                <FormItem label={`Choose the Cabinet Type`} hasFeedback {...formItemLayout}>
                  {getFieldDecorator('cabinetType', {
                      rules: [
                        { required: true, message: 'Please select Cainet Type' },
                      ]
                  })(
                      <Select placeholder="All">
                        <Option value="1">Altera</Option>
                        <Option value="2">Maple</Option>
                      </Select>
                  )
                  }
                </FormItem>

                <FormItem label={`Bank Configuration`}  {...formItemLayout}>
                  {getFieldDecorator('bankConfigurationType', {
                    initialValue: "1"
                  }) (
                    <Radio.Group buttonStyle="solid" >
                      <Radio.Button value="1">B2B</Radio.Button>
                      <Radio.Button value="2">Line</Radio.Button>
                      <Radio.Button value="3">Circle</Radio.Button>
                    </Radio.Group>
                  )
                }
                </FormItem>

              </Col>

              <Col lg={12} md={24} sm={24}>
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
                  <FormItem label={`Progressive Configuration`}  {...formItemLayout}>
                    {getFieldDecorator('progressiveConfigurationType', {
                      initialValue: "1"
                    }) (
                      <Radio.Group buttonStyle="solid" >
                        <Radio.Button value="1">Mega Digital Sign</Radio.Button>
                        <Radio.Button value="2">Regular Digital Sign</Radio.Button>
                        <Radio.Button value="3">Digital Toppers</Radio.Button>
                        <Radio.Button value="4">Without Sign</Radio.Button>
                      </Radio.Group>
                    )
                  }
                  </FormItem>

                  <FormItem label={`Progressive Software (Master)`} hasFeedback {...formItemLayout}>
                    {getFieldDecorator('softwareMaster', {})(
                        <Select placeholder="All">
                          <Option value="1.0">1</Option>
                          <Option value="2.0">2</Option>
                          <Option value="3.0">3</Option>
                        </Select>
                    )
                    }
                  </FormItem>
                  <FormItem label={`Progressive Software (Slave)`} hasFeedback {...formItemLayout}>
                    {getFieldDecorator('softwareSlave', {})(
                        <Select placeholder="All">
                          <Option value="1.0.1">1</Option>
                          <Option value="2.0.1">2</Option>
                          <Option value="3.0.1">3</Option>
                        </Select>
                    )
                    }
                  </FormItem>


                </FieldContainer>
            </Col>

          </Row>

          <Row className={styles.filterButtons}>
            <Col span={24} style={ { textAlign: 'right' } }>
              <FormItem wrapperCol={ {span: 12, offset: 6} }>
                  <Button type="primary" htmlType="submit" onClick={this.handleOk}>Apply</Button>
                  <Button>Clear filters</Button>
              </FormItem>
            </Col>
          </Row>

        </Form>

        <h2>Available Configurations</h2>
        {selectedRowKeys.length > 0 && (
          <Row style={ {marginBottom: 15, textAlign: 'right', fontSize: 13} }>
            <Col>
              {`Selected ${selectedRowKeys.length} items`}
              <Popconfirm
                title="Are you wanna delete selected items?"
                placement="left"
                onConfirm={()=>{}}
              >
                <Button type="primary" style={{ marginLeft: 8}}>
                  Remove
                </Button>   
              </Popconfirm>
            </Col>
          </Row>
        )}
        <List
          dataSource={list}
          pagination={pagination}
          onChange={(page) => {
            console.log('Table List Change');
          }}
          rowSelection={{
            selectedRowKeys,
            onChange: keys => {
              store.setSelectedKeys(keys)
            }
          }}
        />

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
