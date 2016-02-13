var XMLtv = require('./xmltv');
var async = require('async');
var Util = require('./utils');
var nodemailer = require('nodemailer');

var date = new Date();

var channels = ['svt1.svt.se', 'svt2.svt.se']

var urls = [];

for(var ch of channels)
{
    Array.prototype.push.apply(urls, Util.getUrlsForChannelAndDate(ch, date));
}

console.log(urls[0]);

var xmltv = new XMLtv(urls[0]);

xmltv.getMovies(function(movies){
    console.log(movies);
});


// async.forEach(urls, function(url, callback){
//     var xmltv = new XMLtv(url);
// });

