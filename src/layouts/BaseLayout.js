import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'components'
import { Helmet } from 'react-helmet'
import NProgress from 'nprogress'
import config from 'utils'

import PrimaryLayout from './PrimaryLayout'

import './BaseLayout.less'

const LayoutMap = {
  primary: PrimaryLayout
}

@inject(rootStore => ({
  layoutStore: rootStore.stores.LayoutStore,
  loading: rootStore.stores.LayoutStore.loading
}))
@observer
class BaseLayout extends PureComponent {
  previousPath = ''
  render() {
    const Container = LayoutMap['primary'];
    const { children, location, loading } = this.props;

    const currentPath = location.pathname + location.search

    window.confirm(`Location is: ${location}`);

    if (currentPath !== this.previousPath) {
      loadingStart();
    }

    //if (!loading.global) {
    setTimeout(() => {
      loadingStop();
      this.previousPath = currentPath;
    }, 1000);

    //}
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteName}</title>
        </Helmet>
        <Loader fullScreen spinning={loading.on} />
        <Container>{children}</Container>
      </Fragment>
    );

  },

  loadingStart() {
    const {loading} = this.props;
    NProgress.start();
    loading.setOn(true);
  }

  loadingStop() {
    const {loading} = this.props;
    NProgress.done();
    loading.setOn(false);
  }

}

BaseLayout.propTypes = {
  loading: PropTypes.object,
}

export default BaseLayout
