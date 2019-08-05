// api/router.js
// cSpell:ignore ssns

const { api } = require('./mock')
const utils = require('./utils')

// ROUTE Factory for our API
// =============================================================================
const createRouter = express => {
  const router = express.Router() // get an instance of the express Router

  router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our Mock api!...' })
  })

  // more routes for our API will happen here

  router.get('/image', (req, res) => {
    utils.respondTo(res, api.globGet())
  })

  router.get('/image/:imageNumber', (req, res) => {
    const { imageNumber } = req.params
    const { thumb } = req.query
    const callback = data => {
      utils.respondBuffer(res, data)
    }
    api.imageGet({ imageNumber, thumb, callback })
  })

  router.get('/slug', (req, res) => {
    const count = req.query.count
    utils.respondTo(res, api.slugGet(count))
  })

  router.get('/ssns', (req, res) => {
    const count = req.query.count
    const dashes = req.query.dashes
    utils.respondTo(res, api.ssnsGet(count, dashes))
  })

  router.get('/uuid', (req, res) => {
    utils.respondTo(res, api.uuidGet())
  })

  router.get('/vins', (req, res) => {
    var count = req.query.count || 3
    utils.respondTo(res, api.vinsGet(count))
  })

  return router
}

module.exports = {
  createRouter,
}
