import React, { Component } from 'react'
import { LocaleProvider } from 'antd'
import en_US from 'antd/lib/locale-provider/en_US'

import BaseLayout from './BaseLayout'

const languages = {
  en: en_US
}

class Layout extends Component {
  state = {
      language: 'en'
  }

  render() {
    const {children} = this.props;
    const { language } = this.state;

    return (
      <LocaleProvider locale={languages[language]} >
        <BaseLayout>{children}</BaseLayout>
      </LocaleProvider>
    )
  }
}

export default Layout;
