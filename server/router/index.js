const router = require('express').Router()

const PostRouter = require('./post')
const transporterRouter = require('./transporter')
const shipperRouter = require('./shipper')
const bidRouter = require('./bid')

router.use("/transporter", transporterRouter)
router.use("/shipper", shipperRouter)
router.use("/bid", bidRouter)
router.use("/post", PostRouter)

module.exports = router