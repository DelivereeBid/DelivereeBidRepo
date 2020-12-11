const router = require('express').Router()
const TransporterController = require('../controllers/transporter')


router.post("/register", TransporterController.register)
router.post("/login", TransporterController.login)
router.get("/", TransporterController.findAll)




module.exports = router