var XMLtv = require('./xmltv');
var async = require('async');
var Util = require('./utils');
var nodemailer = require('nodemailer');

var date = new Date();

var channels = ['svt1.svt.se', 'svt2.svt.se'];

var urls = [];

for(var ch of channels)
{
    Array.prototype.push.apply(urls, Util.getUrlsForChannelAndDate(ch, date, 7));
}

var allStuff = [];

async.each(urls, function(url, callback){
    console.log(url);
    var xmltv = new XMLtv(url);
    xmltv.getStuff(function(stuff){
        Array.prototype.push.apply(allStuff, stuff);
        callback();
    });
}, function(err){
    for(var s of allStuff)
    {
        if(s.type == "movie")
        {
            console.log(s.start.toDateString() + " " + s.type + " " + s.title + " " + s.year);
        }else
        {
            if(s.season == 1 && s.episode == 1)
            {
                console.log(s.start.toDateString() + " " + s.type + " " + s.title);
            }
        }
    }
});