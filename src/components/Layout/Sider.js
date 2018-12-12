import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from "mobx-react";
import { Icon, Switch, Layout } from 'antd'
import ScrollBar from '../ScrollBar'
import { config } from 'utils'
import SiderMenu from './Menu'
import styles from './Sider.less'


class Sider extends  PureComponent {

  isShowSwithTheme = false

  render() {
    const {
      menus,
      theme,
      isMobile,
      collapsed,
      onCollapseChange,
      onThemeChange,
    } = this.props;

    const { isShowSwithTheme } = this;

    return (
      <Layout.Sider
        width={256}
        theme={theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={isMobile ? null : onCollapseChange}
        className={styles.sider}
      >
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            {collapsed ? null : <h1>{config.siteName}</h1>}
          </div>
        </div>

        <div className={styles.menuContainer}>
          <ScrollBar
            option={{
              // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
              suppressScrollX: true,
            }}
          >
            <SiderMenu
              menus={menus}
              theme={theme}
              isMobile={isMobile}
              collapsed={collapsed}
              onCollapseChange={onCollapseChange}
            />
          </ScrollBar>
        </div>
        {(collapsed || !isShowSwithTheme) ? null : (
          <div className={styles.switchTheme}>
            <span>
              <Icon type="bulb" />
              Switch Theme
            </span>
            <Switch
              onChange={onThemeChange.bind(
                this,
                theme === 'dark' ? 'light' : 'dark'
              )}
              defaultChecked={theme === 'dark'}
              checkedChildren={`Dark`}
              unCheckedChildren={`Light`}
            />
          </div>
        )}
        </Layout.Sider>
    )
  }

}
export default Sider
