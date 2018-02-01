const cheerio = require('cheerio');
const {getHTML} = require('./get_html');

function getImageComic (url, css_img_selector) {
  return getHTML(url).then(function (html) {
    // Load html text to Cheerio object
    var $ = cheerio.load(html);
    // Extract <img>
    var image_dom = $(css_img_selector);
    const image_url = image_dom.attr('src');
    // Parse image url
    var parsed_image_url = parse_image_url(image_url);

    return parsed_image_url;
  })
  .catch(function (error) {
    throw error;
  });
}

function parse_image_url(image_url){
  if(image_url.startsWith("//")){
    return image_url.slice(2); // remove first two chars of string
  }else{
    return image_url
  }
}

module.exports = {
  getImageComic
};
