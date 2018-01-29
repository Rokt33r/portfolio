import React from 'react'
import Link from 'next/link'
import AppLayout from './AppLayout'

const WorkLayout = (props) => (
  <AppLayout>
    <article className='work'>
      <header className='work__header'>
        <h1 className='work__title'>
          title
        </h1>
      </header>
      <div className='content'>
        { props.children }
      </div>
    </article>
  </AppLayout>
)

export default WorkLayout