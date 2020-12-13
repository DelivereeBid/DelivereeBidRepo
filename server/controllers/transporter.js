const {Transporter} = require('../models')
const {comparePassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')
const transporter = require('../models/transporter')

class TransporterController {
    static findAll(req, res, next){
        Transporter.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(transporter => {
            res.status(200).json(transporter)
        })
        .catch(err => next(err))
    }
    static register(req, res, next){
        const {username, email, password, file, vehicle} = req.body
        Transporter.create({
            username, email, password, profile_picture: file, vehicle
        })
        .then((transporter) => {
            res.status(201).json({id: transporter.id, username: transporter.username, email: transporter.email, vehicle: transporter.vehicle})
        })
        .catch(err => {
            console.log(err, '<<< ini eror')
            next(err)
        })
    }
    static login(req, res, next){
        const {email, password} = req.body
        if(!email || !password) throw {code: 400, msg: "Invalid email or password"}
        Transporter.findOne({
            where: {email: email}
        })
        .then((transporter) => {
            if(!transporter) throw {code: 400, msg: "Invalid email or password"}
            if(!comparePassword(password, transporter.password)) throw {code: 400, msg: "Invalid email or password"}
            else {
                const access_token = generateToken({
                    id: transporter.id,
                    email: transporter.email,
                    username: transporter.username,
                    vehicle: transporter.vehicle
                })

                res.status(200).json({access_token: access_token, email: transporter.email, id: transporter.id, username: transporter.username})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static updateTransporter(req, res, next){
        const {id} = req.params
        const masuk = req.loggedIn.email
        const {username, wallet, vehicle} = req.body
        Transporter.update({username, wallet, vehicle}, { where: {id: id, email: masuk}})
        .then(transporter => {
            if(transporter[0] === 0) throw {msg: "Not authorized", code: 403}
            else {
                res.status(200).json({transporter, msg: "Success update profile"})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = TransporterController