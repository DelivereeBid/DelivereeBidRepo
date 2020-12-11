const {Bid, Shipper} = require('../models')

class BidController {
    static findAll(req, res, next){
        Bid.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: {
                model: Shipper,
                attributes: {
                    exclude: ["password", "createdAt", "updatedAt", "wallet"]
                }
            }
        }).then(bid => {
            res.status(200).json(bid)
        }).catch(err => next(err))
    }
    static getById(req, res, next){
        const {id} = req.params
        Bid.findByPk(id, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: {
                model: Shipper,
                attributes: {
                    exclude: ["password", "wallet", "createdAt", "updatedAt"]
                }
            }
        }).then(bid => {
            res.status(200).json(bid)
        }).catch(err => next(err))
    }
    static createBid(req, res, next){
        const {product_name, product_picture, description, from, to} = req.body
        Bid.create({product_name, product_picture, description, from, to, ShipperId: req.loggedIn.id})
        .then(bid => {
            res.status(201).json(bid)
        })
        .catch(err => next(err))
    }
    static updateBid(req, res, next){
        const {id} = req.params
        const {product_picture, product_name, description, from, to} = req.body
        Bid.update({product_name, product_picture, description, from, to}, {
            where: {
                id: id
            }
        }).then(bid => {
            res.status(200).json({msg: "Success update bid"})
        }).catch(err => {
            next(err)
        })
    }

    static deleteBid(req,res, next){
        const {id} = req.params
        Bid.destroy({
            where: {
                id: id
            }
        }).then(bid => {
            res.status(200).json({msg: "Success delete bid"})
        }).catch(err => next(err))
    }
}

module.exports = BidController