import React from 'react'
import Link from 'next/link'

const Navigation = (props) => {
  return (
    <nav className='gnb'>
      <ul className='gnb__list'>
        <li className='gnb__item'>
          <Link href={`/about`}>
            <a className='nav__link'>
              About
            </a>
          </Link>
        </li>
        <li className='gnb__item'>
          <Link href={`/works`}>
            <a className='nav__link'>
              Works
            </a>
          </Link>
        </li>
        <li className='gnb__item apart'>
          <a href='https://manocurry.github.io/'
            className='nav__link'>
            Mano
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation