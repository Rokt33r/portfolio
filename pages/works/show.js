import React from 'react'
import WorkLayout from '../../components/layouts/WorkLayout'
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer'
import path from 'path'
import fetch from 'isomorphic-unfetch'

const PORT = process.env.PORT || 8080

class WorkShow extends React.Component {
  static async getInitialProps ({ query }) {
    const id = query.id
    const hostname = typeof 'window' === 'undefined'
      ? `http://localhost:${PORT}`
      : location.origin
    
    const res = await fetch(`${hostname}/static/works/${id}.md`)
    const content = await res.text()

    return {
      content
    }
  }

  render () {
    return (
      <WorkLayout>
        <MarkdownRenderer source={this.props.source} />
      </WorkLayout>
    )
  }
}

export default Work