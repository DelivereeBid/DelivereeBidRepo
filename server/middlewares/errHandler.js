function errHandler(err, req, res, next){
    let code = err.code || 500
    let msg = err.msg || 'Internal server error'
    let errors = []

    switch(err.name){
        case 'SequelizeValidationError':
            err.errors.forEach(el => {
                errors.push(el.message)
            })
            code = 400
            msg = errors.join(', ')
            break;
        case 'SequelizeUniqueConstraintError':
            code = 400
            errors.push("Email must be unique")
            break
        default:
            errors.push(err.msg)
            code = err.code
            break;
    }
    res.status(code).json(errors)
}

module.exports = errHandler