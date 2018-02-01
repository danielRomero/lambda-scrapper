const {getImageComic} = require('./helpers/get_image');
const url = "http://explosm.net/comics/random";
const css_img_selector = "#main-comic";

function randomComic() {
  return getImageComic(url, css_img_selector)
  .then(function (image_url) {
    return image_url;
  })
  .catch(function (error) {
    throw error;
  });
}

module.exports = {
  randomComic
};
