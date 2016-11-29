var fs = require('fs');
var request = require('request');
var async = require('async');

function downloadImage(url) {
    request(url)
        .pipe(fs.createWriteStream('images/haur.jpg'));

    console.log("Image download...");
}

var url = 'https://yt3.ggpht.com/-Yjh5ftUJb4A/AAAAAAAAAAI/AAAAAAAAAAA/LKsf6_8IS5w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg';

async.parallel(downloadImage(url),function () {
  console.log("image downloaded");
});



