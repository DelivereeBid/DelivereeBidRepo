const router = require('express').Router()
const ServiceController = require('../controllers/service')


router.get("/service", ServiceController.findAll)




module.exports = router