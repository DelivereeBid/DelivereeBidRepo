const router = require('express').Router()

const transporterRouter = require('./transporter')
const shipperRouter = require('./shipper')
// const bidRouter = require('./bid')
// const serviceRouter = require('./service')

router.use(transporterRouter)
router.use(shipperRouter)
// router.use(bidRouter)
// router.use(serviceRouter)

module.exports = router