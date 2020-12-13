const router = require('express').Router()
const BidController = require('../controllers/bid')
const upload = require('../middlewares/upload')
const {authenticationShipper, authorizationBid} = require('../middlewares/auth')

router.get("/", BidController.findAll)
router.get("/:id", BidController.getById)
router.use(authenticationShipper)
router.post("/", upload.single('file'), BidController.createBid)
router.put("/:id", authorizationBid, upload.single('file'), BidController.updateBid)
router.delete("/:id", authorizationBid, BidController.deleteBid)



module.exports = router