import React from 'react'
import Header from '../header/Header'
import HtmlHead from './HtmlHead'

const AppLayout = ({
  children
}) => {
  return (
    <div className='wrapper'>
      <HtmlHead />
      <Header />
      { children }
    </div>
  )
}

export default AppLayout