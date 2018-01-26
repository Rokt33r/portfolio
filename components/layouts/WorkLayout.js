import React from 'react'
import Link from 'next/link'

const WorkLayout = (props) => (
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
)

export default WorkLayout