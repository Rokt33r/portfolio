import React from 'react'
import AppLayout from '../components/layouts/AppLayout'

class About extends React.Component {
  render () {
    return (
      <AppLayout>
        <main className='main'>
          <article className='about'>
            <h2 className='about__title'>
              Designing, building, thinking.
            </h2>
            <p className='about__text'>
              Hello I'm Jiseung Roh. For the past 3+ items I've worked as a UI/UX Designer with a UX driven background and now I am gradually expanding my career to development, too.
            </p>

            <p className='about__text'>
              I am able to quickly adapt to new challenges. Being quite hands-on, I enjoy getting involved in the whole process, starting from ideation and conceptualizing to designing, prototyping, and to testing. Also I love learning new stuffs and endeavor to quickly follow latest trend of technology. My ideal work environment consists of a collaborative multidisciplinary team, that shares visions together.
            </p>

            <section className='career'>
              <h3 className='career__title'>Career</h3>
              <ul className='career__list'>
                <li className='career__item'>
                  <h5 className='career__year'>2017</h5>
                  <dl className='career__specs'>
                    <dt>Mar - Jul</dt>
                    <dd>
                      <h6>Likelion</h6>
                      <p>frontend developer</p>
                    </dd>
                    <dt>Aug - current</dt>
                    <dd>
                      <h6>Revisolution</h6>
                      <p>UX Developer</p>
                    </dd>
                  </dl>
                </li>
                <li className='career__item'>
                  <h5 className='career__year'>2016</h5>
                  <dl className='career__specs'>
                    <dt>Jan</dt>
                    <dd>
                      <h6>Trip to Silicon Valley</h6>
                      <p>frontend developer</p>
                    </dd>
                    <dt>May - Nov</dt>
                    <dd>
                      <h6>True North</h6>
                      <p>IPA: Cart Together UI/UX Design</p>
                      <p>Global SaaS Incubating Project: True North UI/UX Design</p>
                    </dd>
                  </dl>
                </li>
                <li className='career__item'>
                  <h5 className='career__year'>2015</h5>
                  <dl className='career__specs'>
                    <dt>Jan-Dec</dt>
                    <dd>
                      <h6>TEDxSogangU Director</h6>
                      <p>frontend developer</p>
                    </dd>
                    <dt>Aug - Dec</dt>
                    <dd>
                      <h6>InBody</h6>
                      <p>BodyKey Internship</p>
                    </dd>
                    <dt>Nov</dt>
                    <dd>
                      <h6>Imagination Startup Contest</h6>
                      <p>Samanth, Won the 1st prize</p>
                    </dd>
                  </dl>
                </li>
              </ul>
            </section>
          </article>
        </main>
      </AppLayout>
    )
  }
}

export default About