const express = require('express')
const next = require('next')
const parse = { url }

const dev = process.env.NODE_ENV !== 'production'
export const PORT = process.env.PORT ||8080

const app = next({
  dir: '.',
  dev,
})

const handle = app.getRequestHandler()
const getRoutes = require('./routes')

app.prepare()
  .then(() => {
    const server = express()

    server.get('/works/:id', (req, res) => {
      const actualPage = '/works/show'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })