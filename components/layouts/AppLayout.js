import React from 'react'
import Link from 'next/link'

const AppLayout = (props) => (
  <div className='wrap'>
    hihihi
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
  </div>
)

export default AppLayout