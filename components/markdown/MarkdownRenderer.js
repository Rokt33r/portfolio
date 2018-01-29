import React from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import frontmatter from 'frontmatter'
import jsYaml from 'js-yaml'
import { renderMarkdown } from '../../lib/markdown'

const MarkdownRenderer = ({
  source
}) => (
    <article className='markdown'>
      <div dangerouslySetInnerHTML={{__html: renderMarkdown(source)}} />
    </article>
)

export default MarkdownRenderer