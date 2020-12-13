const router = require('express').Router()
const PostController = require('../controllers/post')
const {authenticationTransporter, authorizationPost} = require('../middlewares/auth')

router.get("/", PostController.findAll)
router.get("/:id", PostController.getPostById)
router.use(authenticationTransporter)
router.post("/", PostController.createPost)
router.put("/:id", authorizationPost, PostController.updatePost)
router.delete("/:id", authorizationPost, PostController.deletePost)



module.exports = router