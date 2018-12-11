import React, { Component } from 'react'
import withRouter from 'umi/withRouter'
import { LocaleProvider } from 'antd'
import en_US from 'antd/lib/locale-provider/en_US'

import BaseLayout from './BaseLayout'

const languages = {
  en: en_US
}

@withRouter
class Layout extends Component {
  state = {
      language: 'en'
  }

  render() {
    const { children, location } = this.props;
    const { language } = this.state;

    console.log(111112333);

    return (
      <LocaleProvider locale={languages[language]} >
        <BaseLayout>{children}</BaseLayout>
      </LocaleProvider>
    )
  }
}

export default Layout;
