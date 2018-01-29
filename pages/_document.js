import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()

    const styles = flush()

    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Roh Woohyeon, UX Developer</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link href='/static/styles/xcode.css' rel='stylesheet'/>
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}