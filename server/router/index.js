const router = require('express').Router()

const PostRouter = require('./post')
const transporterRouter = require('./transporter')
const shipperRouter = require('./shipper')
const bidRouter = require('./bid')

router.use("/transporter", transporterRouter)
router.use("/shipper", shipperRouter)
router.use("/bid", bidRouter)
<<<<<<< HEAD
// router.use("/service", serviceRouter)
=======
router.use("/post", PostRouter)
>>>>>>> 513d296509d5751e807863558d91a6b86668e613

module.exports = router