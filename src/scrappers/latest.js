const {getImageComic} = require('./helpers/get_image');
const url = "http://explosm.net/";
const css_img_selector = "#featured-comic";

function latestComic() {
  return getImageComic(url, css_img_selector)
  .then(function (image_url) {
    return image_url;
  })
  .catch(function (error) {
    throw error;
  });
}

module.exports = {
  latestComic
};

