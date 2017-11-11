import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import JiseungSVG from '../../static/images/text-jiseung.svg'


const Header = (props) => {
  return (
    <header className='header'>
      <h1 className='header__me'>
        <Link href='/'>
          <a>
            <JiseungSVG />
          </a>
        </Link>
      </h1>
      <Navigation />
      <p className='contact__text'>
        <a href='mailto: jiseung.roh@gmail.com'
          className='contact__mail'>
          jiseung.roh@gmail.com
        </a>
      </p>
    </header>
  )
}

export default Header