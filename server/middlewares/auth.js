const {verifyToken} =require('../helper/jwt')
const {Transporter, Shipper, Post, Bid} = require('../models')

async function authenticationTransporter(req, res, next){
    let { access_token } = req.headers
    try{
        if(!access_token) throw {msg: "Authentication failed", code: 401}
        else{
            let decoded = verifyToken(access_token)
            let transporter = await Transporter.findOne({
                where: { email: decoded.email }
            })
            if(!transporter) throw {msg: "Auhtentication failed", code: 401}
            else{
                console.log(decoded)
                req.loggedIn = decoded
                next()
            }
        }
    } catch(err){
        next(err)
    }
}
async function authenticationShipper(req, res, next){
    let { access_token } = req.headers
    try{
        if(!access_token) throw {msg: "Authentication failed", code: 401}
        else{
            let decoded = verifyToken(access_token)
            let shipper = await Shipper.findOne({
                where: { email: decoded.email }
            })
            if(!shipper) throw {msg: "Auhtentication failed", code: 401}
            else{
                req.loggedIn = decoded
                next()
            }
        }
    } catch(err){
        next(err)
    }
}
async function authorizationPost(req, res, next){
    try {
        let post = await Post.findByPk(req.params.id)
        if(!post) throw {msg: "Post not found", code: 404}
        if(req.loggedIn.id === post.TransporterId){
            next()
        } else throw {msg: "Not authorized", code: 403}
    } catch (err) {
        next(err)
    }
}
async function authorizationBid(req, res, next){
    try {
        let bid = await Bid.findByPk(req.params.id)
        if(!bid) throw {msg: "Bid not found", code: 404}
        if(req.loggedIn.id === bid.ShipperId){
            next()
        } else throw {msg: "Not authorized", code: 403}
    } catch (err) {
        next(err)
    }
}

module.exports = {authenticationTransporter, authenticationShipper, authorizationPost, authorizationBid}

