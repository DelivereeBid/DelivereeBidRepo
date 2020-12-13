const router = require('express').Router()
const TransporterController = require('../controllers/transporter')
const upload = require('../middlewares/upload')
const {authenticationTransporter} = require('../middlewares/auth')

router.post("/register", upload.single('file'), TransporterController.register)
router.post("/login", TransporterController.login)
router.get("/", TransporterController.findAll)
router.get("/:id", TransporterController.findById)
router.patch("/:id", TransporterController.patchTransporter)
router.put("/:id",authenticationTransporter, TransporterController.updateTransporter)




module.exports = router