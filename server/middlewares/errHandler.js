function errHandler(err, req, res, next){
    let code = err.code || 500
    let msg = err.msg || 'Internal server error'
    let errors = []

    console.log(err.name, 'masukaa');
    console.log(code)
    console.log(err.msg)

    switch(err.name){
        case 'SequelizeValidationError':
            err.errors.forEach(el => {
                if(el.message) {
                    errors.push(el.message)
                }
            })
            code = 400
            console.log(errors, code, 'masuk')
            msg = errors.join(', ')
            break;
        case 'SequelizeUniqueConstraintError':
            code = 400
            errors.push("Email must be unique")
            break;
        case 'SequelizeDatabaseError':
            code = 400;
            errors.push("Internal server error")
        default:
            errors.push(err.msg)
            code = err.code
            break;
    }
    console.log(errors)
    res.status(code).json(errors)
}

module.exports = errHandler