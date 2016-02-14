"use strict"
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
}

module.exports = Utils;