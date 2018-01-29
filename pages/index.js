import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AppLayout from '../components/layouts/AppLayout'
import worksData from '../static/generated/works.json'

const ListItem = ({
  id,
  title,
  brief,
  date
}) => {
  return (
    <li className='item'>
      <Link
        prefetch
        href={{
          pathname: `/works/show`,
          query: { id }, 
        }}
        as={`/works/${id}`}>
        <a>
          <h1 className='title'>{ title }</h1>
          <p className='text brief'>{ brief }</p>
          <p className='text date'>{ date }</p>
        </a>
      </Link>
      <style jsx>{`
        .item {
          margin-bottom: 24px;
        }

        .item a {
          display: flex;
          align-items: center;
          width: 100%;
          height: 125px;
          text-decoration: none;
        }

        .text [
          font-size: 14px;
          color: #afb5ba;
        ]
        
      `}</style>
    </li>
  )
}

const Index = (props) => (
  <AppLayout>
    <section className='cover'>
      <h1 className='cover__title'>
        <img
          className='img'
          src='/static/images/title-cover.svg'
          alt='Building, designing, thinking'
        />
      </h1>
      <p className='cover__text'>
        A Seoul—based junior user interface & experience developer with 3+ years of experience.
      </p>
    </section>
    <section className='works'>
      <h1 className='works__title'>
        <img
          src='/static/images/text-works.svg'
          alt='Selected works'
        />
      </h1>
      <ul className='list'>
        {
          worksData.map((work, index) => (
            <ListItem
              key={index}
              id={work.id}
              title={work.title}
              brief={work.brief}
              date={work.date}
            />
          ))
        }
      </ul>
    </section>
    <style jsx>{`
      .cover {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding-left: 15px;
        padding-right: 15px;
      }

      .cover__title{
        width: 100%;
        max-width: 500px;
      }
      
      .cover__title img {
        width: 100%;
        height: auto;
      }

      .cover__text {
        margin-top: 24px;
        font-size: 14px;
        font-family: 'Spoqa Han Sans', sans-serif;
        line-height: 1.6;
        text-align: center;
      }

      .works {
        width: 100%;
        max-width: 960px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (min-width: 540px) {
        .cover__text {
          font-size: 15px;
        }
      }
    `}</style>
  </AppLayout>
)

export default Index