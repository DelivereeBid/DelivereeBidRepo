const {Shipper} = require('../models')
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
        .catch(err => next(err))
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
            console.log(err.name, 'ajfd;j')
            next(err)
        })
    }

    static login(req, res, next){
        const {email, password} = req.body
        if(!email || !password) throw {code: 400, msg: "Invalid email or password"}
        Shipper.findOne({
            where: {email: email}
        })
        .then((shipper) => {
            if(!shipper) throw {code: 400, msg: "Invalid email or password"}
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
}

module.exports = ShipperController