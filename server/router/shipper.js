const router = require('express').Router()
const ShipperController = require('../controllers/shipper')
const upload = require('../middlewares/upload')

router.post("/register", ShipperController.register)
router.post("/login", ShipperController.login)
router.get("/", ShipperController.findAll)



module.exports = router