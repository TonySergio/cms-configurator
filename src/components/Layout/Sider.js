import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch, Layout } from 'antd'
import ScrollBar from '../ScrollBar'
import { config } from 'utils'
import SiderMenu from './Menu'
import styles from './Sider.less'

class Sider extends PureComponent {
  render() {
    const {
      menus,
      theme,
      isMobile,
      collapsed,
      onCollapseChange,
    } = this.props;

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
        <div className={styles.brand}
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
        {collapsed ? null : (
          <div className={styles.switchTheme}>
            <span>
              <Icon type="bulb" />
              <Trans>Switch Theme</Trans>
            </span>
            <Switch
              onChange={onThemeChange.bind(
                this,
                theme === 'dark' ? 'light' : 'dark'
              )}
              defaultChecked={theme === 'dark'}
              checkedChildren={i18n.t`Dark`}
              unCheckedChildren={i18n.t`Light`}
            />
          </div>
        )}
        </Layout.Sider>
    )
  }

}
export default Sider