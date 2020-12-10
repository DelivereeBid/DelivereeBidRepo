const {Shipper} = require('../models')

class ShipperController {
    static register(req, res){
        const {username,email,password} = req.body
        Shipper.create({
            username, email, password
        })
        .then((shipper) => {
            res.status(201).json(shipper)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = ShipperController