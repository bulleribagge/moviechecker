var http = require('http');
var zlib = require('zlib');
var iconvl = require('iconv-lite');
var xml2js = require('xml2js');
var movie = require('./movie')

function XMLtv(channel, date)
{
    _this = this;
    url = "http://xmltv.tvsajten.com/xmltv/" + channel + "_" + date.toISOString().slice(0,10) + ".xml.gz";
}

XMLtv.prototype.getMovies = function(callback){
    var movies = [];
    http.get(_this.url, function(res){
        var chunks = [];
        
        res.on('data', function(chunk){
            chunks.push(chunk);
        });
        
        res.on('end', function(){
            var buffer = Buffer.concat(chunks);
            zlib.unzip(buffer, function(err, ungzipped){
                    if(!err)
                    {
                        var decoded = iconvl.decode(ungzipped, 'iso-8859-1'); 
                        return _this.parseXML(decoded);
                    }else
                    {
                        console.log(err);
                    }
            });
        });
    });    
}

XMLtv.prototype.parseXML = function(xml)
{
    var movies = [];
    xml2js.parseString(xml, function(err, result){
        for(var p of result.tv.programme)
        {
            if(p.category)
            {
                if(p.category[0]._ == "Movie")
                {
                    movies.push(new movie(p));
                }
            }
        }
    });
    
    return movies;
}

module.exports = XMLtv;