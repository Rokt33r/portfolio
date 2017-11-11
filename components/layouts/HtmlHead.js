import React from 'react'
import Head from 'next/head'

const HtmlHead = () => (
  <Head>
    <meta name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport" />
    <link rel='stylesheet'
      href='/static/styles.css' />
  </Head>
)

export default HtmlHead