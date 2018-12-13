import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table, message } from 'antd';
import Link from 'umi/link'
import { DropOption } from 'components';

import styles from './List.less'


export default class List extends PureComponent {

  handleMenuClick = (record, e) => {
    if (e.key == '1') {
        message.info('Will be removed');
    }
  }

  render() {
    const {
      ...tableProps
    } = this.props

    const columns =
    [
        {
          title: '#',
          dataIndex: 'id',
          width: 20,
          fixed: 'left'
        },
        {
          title: 'Configuration Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => <Link to={`configurations/${record.id}`}>{text}</Link>,
        },
        {
          title: 'Bank',
          dataIndex: 'bankConfigurationType',
          key: 'bankConfigurationType'
        },
        {
          title: 'Machines',
          dataIndex: 'machines',
          key: 'machines'
        },
        {
          title: 'Q-ty',
          dataIndex: 'qty',
          key: 'qty'
        },
        {
          title: 'Toppers',
          dataIndex: 'toppers',
          key: 'toppers'
        },
        {
          title: 'Progressive',
          dataIndex: 'progressiveType',
          key: 'progressiveType'
        },
        {
          title: 'Monitors',
          dataIndex: 'monitorConfiguration',
          key: 'monitorConfiguration'
        },
        {
          title: 'Q-ty D',
          dataIndex: 'qtyDevices',
          key: 'qtyDevices'
        },
        {
          title: 'Operation',
          key: 'operation',
          //fixed: 'right',
          render: (text, record) => {
            return (
              <DropOption
                onMenuClick={e => this.handleMenuClick(record, e)}
                menuOptions={[
                  { key: '1', name: 'Delete'}
                ]}
              />
            )
          }
        }
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Total ${total} items`,
        }}
        className={styles.table}
        bordered
        scroll={ { x: 1200 } }
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }

}
