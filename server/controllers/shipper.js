const {Shipper, Bid} = require('../models')
const {comparePassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')

class ShipperController {
    static findAll(req, res, next){
        Shipper.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(shipper => {
            res.status(200).json(shipper)
        })
        .catch(err => {
            /* istanbul ignore next */
            next(err)
        })
    }
    static getById(req, res, next){
        const {id} = req.params
        Shipper.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        })
        .then(result => {
            if(!result) throw {msg: "Shipper not found", code: 404}
            else {
                res.status(200).json(result)
            }
        })
        .catch(err => {
            next(err)
        })
    }
    static register(req, res, next){
        const {username,email,password, file} = req.body
        Shipper.create({
            username, email, password, profile_picture: file
        })
        .then((shipper) => {
            res.status(201).json(res.status(201).json({id: shipper.id, username: shipper.username, email: shipper.email}))
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next){
        const {email, password} = req.body
        /* istanbul ignore next */
        if(!email || !password) throw {code: 400, msg: "Invalid email or password"}
        Shipper.findOne({
            where: {email: email}
        })
        .then((shipper) => {
            /* istanbul ignore next */
            if(!shipper) throw {code: 400, msg: "Invalid email or password"}
            /* istanbul ignore next */
            if(!comparePassword(password, shipper.password)) throw {code: 400, msg: "Invalid email or password"}
            else {
                const access_token = generateToken({
                    id: shipper.id,
                    email: shipper.email
                })
    
                res.status(200).json({access_token: access_token, email: shipper.email, id: shipper.id, username: shipper.username})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static updateShipper(req, res, next){
        const {id} = req.params
        const masuk = req.loggedIn.email
        const {username, wallet} = req.body
        Shipper.update({username, wallet}, {where: {id: id, email: masuk}})
        .then(shipper => {
            if(shipper[0] === 0) throw {msg: "Not authorized", code:403}
            else {
                res.status(200).json({msg: "Success update profile"})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ShipperController