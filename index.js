var XMLtv = require('./xmltv');
var async = require('async');
var Util = require('./utils');

var date = new Date();

var channels = ['svt1.svt.se', 'svt2.svt.se'];

var urls = [];

for(var ch of channels)
{
    Array.prototype.push.apply(urls, Util.getUrlsForChannelAndDate(ch, date, 7));
}

var movies = [];
var series = [];
var allStuff = [];
var mailText = "";

async.each(urls, function(url, callback){
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
            movies.push(s);
        }else
        {
            if(s.season == 1 && s.episode == 1)
            {
                series.push(s);
            }
        }
    }
    
    Util.composeAndSendMail(['almenmartin@gmail.com'], movies, series);
});