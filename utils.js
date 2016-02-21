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
        moment.locale('sv');
        
        movies.sort(function(a,b){
            return a.start > b.start;
        });
        
        var htmlContent = "";//"<meta charset=\"ISO-8859-1\"></meta>";
        
        if(movies.length > 0)
        {
            htmlContent += "<h1>Filmer</h1>";
            
            var currDate = 0;
            
            for(var m of movies)
            {
                if(m.start.getDate() != currDate)
                {
                    htmlContent += "<b>" + moment(m.start).format("dddd, MMMM Do") + "</b>";
                }
                htmlContent += "<p>" + m.start.toTimeString().substring(0, 5) + " " + m.title + " " + m.year + "</p>";
                
                currDate = m.start.getDate();
            }
        }
        
        series = series.filter(function(s)
        {
            return s.season == 1 && s.episode == 1;
        });
        
        if(series.length > 0)
        {
            htmlContent += "<h1>Seriepremiärer</h1>";
            
            var currDate = 0;
            
            for(var s of series)
            {
                if(s.start.getDate() != currDate)
                {
                    htmlContent += "<b>" + moment(s.start).format("dddd, MMMM Do") + "</b>";
                }
                
                htmlContent += "<p>" + s.start.toTimeString().substring(0, 5) + " " + s.title + "</p>";
                
                currDate = s.start.getDate();
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
    
    static pad(n, width, z) 
    {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}

module.exports = Utils;