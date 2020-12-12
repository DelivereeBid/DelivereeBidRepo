const router = require('express').Router()
const ShipperController = require('../controllers/shipper')
const upload = require('../middlewares/upload')
const {authenticationShipper} = require('../middlewares/auth')
router.post("/register", upload.single('file'), ShipperController.register)
router.post("/login", ShipperController.login)
router.get("/", ShipperController.findAll)
router.put("/:id", authenticationShipper, ShipperController.updateShipper)


module.exports = router