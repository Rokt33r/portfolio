import React from 'react'
import AppLayout from '../components/layouts/AppLayout'
import IBuildSVG from '../static/images/text-cover.svg'

class Index extends React.Component {
  constructor (props) {
    super(props)

  }

  render (props) {
    const {
      children
    } = this.props

    return (
      <AppLayout>
        <section className='cover'>
          <h2 className='cover__heading'>
            <IBuildSVG/>
          </h2>
          <p className='cover__text'>
          A Seoul—based junior user interface & experience developer<br />
          with 3+ years of experience.
          </p>
        </section>
        <style jsx>{`
          .cover {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }
          .cover__text {
            margin-top: 35px;
            text-align: center;
            line-height: 1.5;
          }
        `}</style>
      </AppLayout>
    )
  }
}

export default Index