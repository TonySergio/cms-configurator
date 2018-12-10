import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { BackTop, Layout, Drawer } from 'antd'
import { config } from 'utils'
import Error from '../pages/404'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import { AppLayout } from 'components'
import styles from './PrimaryLayout.less'

const { Content } = Layout
const { Header, Bread } = AppLayout


class PrimaryLayout extends PureComponent {
  state = {
    isMobile: false
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      const { isMobile } = this.state
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        })
      }
    })
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler)
  }

  onCollapseChange = collapsed => {
  }

  render() {
    const { location, children } = this.props;
    const { isMobile } = this.state;
    const { onCollapseChange } = this;



  }


}
