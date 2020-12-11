const router = require('express').Router()

const transporterRouter = require('./transporter')
const shipperRouter = require('./shipper')
const bidRouter = require('./bid')
const serviceRouter = require('./service')

router.use("/transporter", transporterRouter)
router.use("/shipper", shipperRouter)
router.use("/bid", bidRouter)
router.use("/service", serviceRouter)

module.exports = router