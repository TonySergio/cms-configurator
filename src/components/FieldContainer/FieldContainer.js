import { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './FieldContainer.less'

export default class FieldContainer extends Component {
    render() {
      const { className, children, showFrame = true } = this.props;

      return (
        <div
          className={classnames(className, {
              [styles.withFrame]: showFrame
          })}
        >
          {children}
        </div>
      )
    }
}

FieldContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  showFrame: PropTypes.bool
}
