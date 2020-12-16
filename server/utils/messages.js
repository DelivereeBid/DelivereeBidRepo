const moment = require('moment');
/* istanbul ignore next */
function formatMessage(username, text) {
  return {
    username,
    text
  };
}

module.exports = formatMessage;
