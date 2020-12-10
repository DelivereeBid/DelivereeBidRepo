const router = require('express').Router()
const BidController = require('../controllers/bid')


router.get("/bid", BidController.findAll)




module.exports = router