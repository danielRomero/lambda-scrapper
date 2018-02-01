const {latestComic} = require('./src/scrappers/latest');
const {randomComic} = require('./src/scrappers/random');

function main (event, context, callback) {
  // latestComic().then(function (image_url) {
  //   callback(null, image_url);
  // })
  // .catch(function (error) {
  //   callback(error);
  // });

  // resourcePath

  randomComic().then(function (image_url) {
    callback(null, success_response_html(image_url));
  })
  .catch(function (error) {
    callback(error_response());
  });
}


// function success_response_json(image_url){
//   return {
//     statusCode: 200,
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({comic: image_url})
//   }
// }
function success_response_html(image_url){
  return {
    statusCode: 200,
    headers: {"Content-Type": "text/html"},
    body: '<img src="'+image_url+'" alt="'+image_url+'">'
  }
}

function error_response(){
  return {
    statusCode: 500,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: "something is not working (╯°□°）╯︵ ┻━┻"})
  }
}
module.exports = {
  main
};
