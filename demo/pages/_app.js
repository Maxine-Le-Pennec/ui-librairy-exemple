import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import 'library-exemple/index.css'

function MyApp(props) {
  const {Component, pageProps} = props

  return (
    <div style={{height: '100%'}}>
      <Head>
        <title>test</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' charset='utf-8' />
      </Head>
      <Component {...pageProps} />

      <style global jsx>{`
        body,
        html,
        #__next {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          margin: 0;
          font-family: Arial;
        }
        `}</style>
    </div>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

