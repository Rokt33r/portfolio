import React from 'react'
import Link from 'next/link'
import AppLayout from '../../components/layouts/AppLayout'


const WorkListItem = ({
  id,
  title,
  brief,
  date
}) => (
  <li>
    <Link
      href={{
        pathname: '/works/show',
        query: { id }, 
      }}
      as={`/works/${id}`}
    >
      <a>
        <article className='work'>
          <header className='work__header'>
            <h1>
              { title }
            </h1>
          </header>
          <div className='work__info'>
            <p>
              { brief }
            </p>
            <p className='date'>
              { date }
            </p>
          </div>
        </article>
      </a>
    </Link>
  </li>
)

const WorksList = (props) => (
  <AppLayout>
    <ul className='list'>
      {
        worksData.map((work, index) => (
          <WorkListItem
            key={index}
            id={work.id}
            title={work.title}
            brief={work.brief}
            date={work.date}
          />
        ))
      }
    </ul>
  </AppLayout>
)

export default WorksList