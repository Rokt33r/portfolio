const worksData = require('./static/generated/works.json')

const worksPathMap = worksData.reduce((acc, work) => {
  acc[`/works/${work.id}`] = {
    pages: '/works/show',
    query: { id: work.id },
  }
  return acc
}, {})

module.exports = () => {
  return {
    '/': { pages: '/' },
    ...worksPathMap,
  }
}