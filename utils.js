"use strict"

var Mailgun = require('mailgun-js');
var moment = require('moment');

class Utils
{
    static parseDate(str)
    {
        return new Date(str.slice(0,4) + "-" + str.slice(4,6) +"-"+ str.slice(6,8) +" "+ str.slice(8,10) + ":" + str.slice(10,12));
    }
    
    static getUrlsForChannelAndDate(channel, date, days)
    {
        var urls = new Array();
        for(var i = 0; i < days; i++)
        {
            urls.push("http://xmltv.tvsajten.com/xmltv/" + channel + "_" + Utils.addDays(date, i).toISOString().slice(0,10) + ".xml.gz");
        }
        
        return urls;
    }
    
    static addDays(date, days)
    {
        var res = new Date(date);
        res.setDate(res.getDate() + days);
        return res;
    }
    
    static compose(movies, series)
    {
        movies.sort(function(a,b){
            return a.start > b.start;
        });
        
        var htmlContent = "";//"<meta charset=\"ISO-8859-1\"></meta>";
        
        if(movies.length > 0)
        {
            htmlContent += "<h1>Movies</h1>";
            
            var currDate = 0;
            
            for(var m of movies)
            {
                if(m.start.getDate() != currDate)
                {
                    htmlContent += "<b>" + moment(m.start).format("dddd, MMMM Do") + "</b>";
                }
                htmlContent += "<p>" + m.start.getHours() + ":" + m.start.getMinutes() + " " + m.title + " " + m.year + "</p>";
                
                currDate = m.start.getDate();
            }
        }
        
        if(series.length > 0)
        {
            htmlContent += "<h1>Seriepremiärer</h1>";
            
            for(var s of series)
            {
                if(s.season == 1 && s.episode == 1)
                {
                    htmlContent += "<p>" + s.start.toDateString() + " " + s.type + " " + s.title + "</p>";
                }
            }
        }
        
        return htmlContent;
    }
    
    static composeAndSendMail(recievers, movies, series)
    {
        var mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
                    
        var mailOpts = {
            from: 'get_get_martin@hotmail.com',
            to: recievers.join(';'),
            subject: 'Veckans filmer',
            html: Utils.compose(movies, series)
        };
        
        mailgun.messages().send(mailOpts, function(err, body){
           if(err)
            {
                console.log("error" + err);
            }else{
                console.log(body);
            }
        });
    }
}

module.exports = Utils;