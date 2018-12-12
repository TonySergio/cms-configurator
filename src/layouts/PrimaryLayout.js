import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from "mobx-react";
import withRouter from 'umi/withRouter'
import { BackTop, Layout, Drawer } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import { config, pathMatchRegexp } from 'utils'
import Error from '../pages/404'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import { AppLayout } from 'components'
import styles from './PrimaryLayout.less'

const { Content } = Layout
const { Header, Bread, Sider } = AppLayout

@withRouter
@inject(rootStore => ({
    layoutStore: rootStore.stores.LayoutStore
}))
@observer
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
    this.props.layoutStore.handleCollapseChange(collapsed);
  }

  onThemeChange (theme) {
    this.props.layoutStore.handleThemeChange(theme)
  }

  render() {
    const { location, children, layoutStore } = this.props;
    const { isMobile } = this.state;
    const { onCollapseChange, onThemeChange } = this;
    const {
      theme,
      collapsed,
      routeList,
      notifications,
      avatar,
      userName
    } = layoutStore;

    console.log('layoutStore')
    console.log(layoutStore);

    const newRouteList = routeList;

    // Find a route that matches the pathname.
    const currentRoute = newRouteList.find(
      _ => _.route && pathMatchRegexp(_.route, location.pathname)
    )

    // MenuParentId is equal to -1 is not a available menu.
    const menus = newRouteList.filter(_ => _.menuParentId !== '-1')

    //TODO: use permission like in CMS with association roles/feature
    const hasPermission = true;

    const headerProps = {
      menus,
      collapsed,
      notifications,
      onCollapseChange,
      avatar: avatar,
      userName: userName,
      fixed: config.fixedHeader,
    };

    const siderProps = {
      theme,
      menus,
      isMobile,
      collapsed,
      onCollapseChange,
      onThemeChange: onThemeChange.bind(this)
    };

    return (
        <Fragment>
          <Layout>
            { isMobile ? (
                <Drawer>
                  maskClosable
                  closable={false}
                  onClose={onCollapseChange.bind(this, !collapsed)}
                  visible={!collapsed}
                  placement="left"
                  width={200}
                  style={{
                    padding: 0,
                    height: '100vh'
                  }}

                  <Sider {...siderProps} collapsed={false} />
                </Drawer>
            ) : (
              <Sider {...siderProps} />
            )}

            <div
              className={styles.container}
              style={{ paddingTop: config.fixedHeader ? 72 : 0 }}
              id="primaryLayout"
            >
                <Header {...headerProps} />
                <Content className={styles.content}>
                  <Bread routeList={newRouteList} />
                  {hasPermission ? children : <Error />}
                </Content>
                <BackTop
                    className={styles.backtop}
                    target={() => document.querySelector('#primaryLayout>div')}
                />
                <GlobalFooter
                  className={styles.backTop}
                  copyright={config.copyright}
                />
            </div>

          </Layout>
        </Fragment>
    );
  }

}

// PrimaryLayout.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default PrimaryLayout;
