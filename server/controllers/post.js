const {Bid, Post} = require('../models')

class PostController {
    static findAll(req, res, next){
        Post.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: {
                model: Bid,
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        }).then(post => {
            res.status(200).json(post)
        }).catch(err => next(err))
    }
    static getPostById(req, res, next){
        const {id} = req.params
        Post.findByPk(id, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: {
                model: Bid,
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        }).then(post => {
            if(!post){
                throw {msg: "Post not found", code: 404}
            } else {
                res.status(200).json(post)
            }
        }).catch(err => next(err))
    }
    static createPost(req, res, next){
        const {BidId, price} = req.body
        console.log(BidId, price, 'line 41')
        Post.create({TransporterId: req.loggedIn.id, BidId, price, status: 'Pending', tracking_log: 'Pending'})
        .then(post => {
            console.log('masuk post')
            res.status(201).json(post)
        })
        .catch(err => {
            console.log(err, 'line 46')
            next(err)
        })
    }
    static updatePost(req, res, next){
        const {id} = req.params
        const {price, status, tracking_log} = req.body
        Post.update({price, status, tracking_log}, {
            where: {
                id: id
            }
        }).then(post => {
            res.status(200).json({msg: "Success update post"})
        }).catch(err => {
            next(err)
        })
    }

    static deletePost(req,res, next){
        const {id} = req.params
        Post.destroy({
            where: {
                id: id
            }
        }).then(post => {
            res.status(200).json({msg: "Success delete post"})
        }).catch(err => next(err))
    }
}

module.exports = PostController