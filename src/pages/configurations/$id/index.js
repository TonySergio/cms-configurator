import { Component } from 'react';
import { Page } from 'components';
import { Alert } from 'antd';


export default class Configuration extends Component {
  render() {
    return (
      <Page inner>
        <h1>Configuration Edit Page</h1>
        <Alert
          message="Informational Notes"
          description="This page in Development."
          type="info"
          showIcon
          closable
        />
      </Page>
    )
  }
}
