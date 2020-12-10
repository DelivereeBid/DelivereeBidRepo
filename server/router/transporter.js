const router = require('express').Router()
const TransporterController = require('../controllers/transporter')


router.post("/transporter/register", TransporterController.register)




module.exports = router