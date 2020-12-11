function errHandler(err, req, res, next){
    let code = err.code || 500
    let msg = err.msg || 'Internal server error'
    let errors = ''

    switch(err.name){
        case 'SequelizeValidationError':
            err.errors.forEach(el => {
                errors = el.message
            })
            code = 400
            // msg = errors.join(', ')
            break;
        case 'SequelizeUniqueConstraintError':
            code = 400
            errors = "Email must be unique"
            break
        case 'SequelizeDatabaseError':
            code = 400
            errors = 'Value cannot be null'
        default:
            errors = msg
            code = 500
            break;
    }
    res.status(code).json({message: errors})
}

module.exports = errHandler