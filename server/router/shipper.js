const router = require('express').Router()
const ShipperController = require('../controllers/shipper')


router.post("/register", ShipperController.register)
router.post("/login", ShipperController.login)
router.get("/", ShipperController.findAll)



module.exports = router