const {Transporter} = require('../models')

class TransporterController {
    static register(req, res){
        const {username, email, password} = req.body
        Transporter.create({
            username, email, password
        })
        .then((transporter) => {
            res.status(201).json(transporter)
        })
        .catch(err => {
            console.log(err, 'ini err')
        })
    }    
}

module.exports = TransporterController