import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/layouts/AppLayout'


const Index = (props) => (
  <div className='wrap'>
    <Head>
      <title>Roh Woohyeon, UX Developer</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
    </Head>
    <AppLayout />
  </div>
)

export default Index