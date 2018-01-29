import React from 'react'
import Link from 'next/link'

const AppLayout = (props) => (
  <div className='wrap'>
    <header className='header'>
      <Link href='/'>
        <a>
          <img
            class='logo'
            src='/static/images/logo-woohyeon.svg'
            alt='우현'
          />
        </a>
      </Link>
    </header>
    { props.children }
    <style jsx global>{`
      * { 
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        line-height: 1.5;
        color: #1b2733;
      }

      ul,
      ol {
        list-style-type: none;
        padding-left: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
        opacity: .8;
      }
    `}</style>
    <style jsx>{`
      .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 72px;
        background-color: rgba(255, 255, 255, .95)
      }

      .header a {
        height: 22px;
      }

      .logo {
        width: 88px;
        height: 22px;
      }
    `}</style>
  </div>
)

export default AppLayout