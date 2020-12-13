const {Bid, Post, Transporter} = require('../models')

class PostController {
    static findAll(req, res, next){
        Post.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                model: Bid,
                required: true,
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        ]
        }).then(post => {
            res.status(200).json(post)
        }).catch(err => {
            next(err)
        })
    }
    static getPostById(req, res, next){
        const {id} = req.params
        Post.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                model: Bid,
                required: true,
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }],
            where: {
                id: id
            }
        }).then(post => {
            if(post.length === 0){
                throw {msg: "Post not found", code: 404}
            } else {
                res.status(200).json(post)
            }
        }).catch(err => next(err))
    }
    static createPost(req, res, next){
        const {BidId, price} = req.body
        console.log(req.loggedIn, 'logeen')
        Post.create({TransporterId: req.loggedIn.id, BidId, price, status: 'Pending', 
        tracking_log: 'Pending', name: req.loggedIn.username, vehicle: req.loggedIn.vehicle})
        .then(post => {
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
            if(post[0] === 0) throw {msg: "Failed update post", code: 400}
            else {
                res.status(200).json({msg: "Success update post"})
            }
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
            if(post[0] === 0) throw {msg: "Failed delete post", code: 400}
            else {
                res.status(200).json({msg: "Success delete post"})
            }
        }).catch(err => next(err))
    }
}

module.exports = PostController