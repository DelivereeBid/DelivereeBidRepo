const router = require('express').Router()
const ShipperController = require('../controllers/shipper')


router.post("/shipper/register", ShipperController.register)




module.exports = router