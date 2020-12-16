function errHandler(err, req, res, next) {
  let code = err.code || 500;
  let msg = err.msg || "Internal server error";
  let errors = [];

  switch (err.name) {
    case "SequelizeValidationError":
        /* istanbul ignore next */
      err.errors.forEach((el) => {
        if (el.message) {
          errors.push(el.message);
        }
      });
      code = 400;
      msg = errors.join(", ");
      break;
    case "SequelizeUniqueConstraintError":
      code = 400;
      errors.push("Email must be unique");
      break;
    /* istanbul ignore next */
    case "SequelizeDatabaseError":
      code = 500;
      errors.push("Internal server error");
      break;
    /* istanbul ignore next */
    case "SequelizeConnectionError":
      code = 400;
      errors.push("Connection failed");
      break;
    default:
      errors.push(err.msg || err.message);
      code = err.code;
      break;
  }
  res.status(code).json(errors);
}

module.exports = errHandler;
