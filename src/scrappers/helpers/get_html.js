const request = require('axios');

function getHTML (url) {
  return request.get(url)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    throw error;
  });
}

module.exports = {
  getHTML
};
