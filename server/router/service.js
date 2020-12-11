const router = require('express').Router()
const ServiceController = require('../controllers/service')
const upload = require('../middlewares/upload')
const {authenticationTransporter, authorizationService} = require('../middlewares/auth')

router.use(authenticationTransporter)
router.get("/", ServiceController.findAll)
router.get("/:id", ServiceController.getById)
router.post("/", ServiceController.createService)
router.put("/:id", authorizationService, ServiceController.updateService)
router.delete("/:id", authorizationService, ServiceController.deleteService)


module.exports = router