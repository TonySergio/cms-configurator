import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from "mobx-react";
import { Menu, Icon, Layout, Avatar, Popover, Badge, List } from 'antd'
import moment from 'moment'
import classnames from 'classnames'
import config from 'config'
import styles from './Header.less'


const { SubMenu } = Menu

class Header extends PureComponent {
  handleClickMenu = e => {
    e.key === 'SignOut' && this.onSignOut()
  }
  onSignOut() {
    console.log('SignOut');
  }

  notifications = []

  render() {
    const {
      fixed,
      collapsed,
      avatar,
      onCollapseChange,
    } = this.props;

    const { notifications } = this;

    const rightContent = [
      <Menu key="user" mode="horizontal" onClick={this.handleClickMenu}>
        <SubMenu
          title={
            <Fragment>
              <span style={{color: '#999', marginRight: 4}}>
                Welcome user
              </span>
              <Avatar style={{ marginLeft: 8}} src={avatar} />
            </Fragment>
          }
        >
          <Menu.Item key="SignOut">
            Sign Out
          </Menu.Item>
      </SubMenu>
      </Menu>
    ]

    rightContent.unshift(
      <Popover
        placement="bottomRight"
        trigger="click"
        key="notifications"
        overlayClassName={styles.notificationPopover}
        getPopupContainer={() => document.querySelector('#layoutHeader')}
        content={
          <div className={styles.notification}>
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              locale={{
                emptyText: 'You have viewed all notifications.',
              }}
              renderItem={item => (
                <List.Item className={styles.notificationItem}>
                  <List.Item.Meta
                    title={
                      <Ellipsis tooltip lines={1}>
                        {item.title}
                      </Ellipsis>
                    }
                    description={moment(item.date).fromNow()}
                  />
                  <Icon
                    style={{ fontSize: 10, color: '#ccc' }}
                    type="right"
                    theme="outlined"
                  />
                </List.Item>
              )}
            />
            {notifications.length ? (
              <div
                onClick={onAllNotificationsRead}
                className={styles.clearButton}
              >
                Clear notifications
              </div>
            ) : null}
          </div>
        }
      >
        <Badge
          count={notifications.length}
          dot
          offset={[-10, 10]}
          className={styles.iconButton}
        >
          <Icon className={styles.iconFont} type="bell" />
        </Badge>
      </Popover>
    )


    return (
      <Layout.Header
        className={classnames(styles.header, {
          [styles.fixed]: fixed,
          [styles.collapsed]: collapsed,
        })}
        id="layoutHeader"
      >
        <div
          className={styles.button}
          onClick={onCollapseChange.bind(this, !collapsed)}
        >
          <Icon
            type={classnames({
              'menu-unfold': collapsed,
              'menu-fold': !collapsed,
            })}
          />
        </div>

        <div className={styles.rightContainer}>{rightContent}</div>
      </Layout.Header>
    )

  }
}

Header.propTypes = {
  fixed: PropTypes.bool,
  collapsed: PropTypes.bool
}


export default Header
