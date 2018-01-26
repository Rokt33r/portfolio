import worksPathMap from './static/generated/works.json'

module.exports = () => {
  return {
    '/': { pages: '/' },
    '/404': { pages: '/404' },
    '/works': worksPathMap.reduce((acc, work) => {
      acc[`/work/${work.id}`] = { pages: `/work/show/${work.id}` }
      return acc
    }, {})
  }
}