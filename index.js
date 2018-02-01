const {main} = require('./main');

exports.handler = (event, context, callback) => {
  main(event, context, callback);
};

