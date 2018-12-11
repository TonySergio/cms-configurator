import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import withRouter from 'umi/withRouter'
import { Loader } from 'components'
import { Helmet } from 'react-helmet'
import NProgress from 'nprogress'
import { config } from 'utils'

import PrimaryLayout from './PrimaryLayout'

import './BaseLayout.less'

const LayoutMap = {
  primary: PrimaryLayout
}

@withRouter
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
      //this.loadingStart();
    }

    //if (!loading.global) {
    // setTimeout((() => {
    //   this.loadingStop();
    //   this.previousPath = currentPath;
    // }).bind(this), 1000);

    //}
    console.log(`Container ${Container}`);

    return (
      <Fragment>
        <Helmet>
          <title>{config.siteName}</title>
        </Helmet>
        <Loader fullScreen spinning={false} />
        <Container>{children}</Container>
      </Fragment>
    )

  }

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

export default BaseLayout
