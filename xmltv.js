var http = require('http');
var zlib = require('zlib');
var iconvl = require('iconv-lite');
var xml2js = require('xml2js');
var Movie = require('./movie')
var Serie = require('./serie')

function XMLtv(url)
{
    _this = this;
    url = url;
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
            zlib.gunzip(buffer, function(err, ungzipped){
                    if(!err)
                    {
                        var decoded = iconvl.decode(ungzipped, 'iso-8859-1'); 
                        callback(_this.parseMovies(decoded));
                    }else
                    {
                        console.log(err);
                    }
            });
        });
    });    
}

XMLtv.prototype.parseMovies = function(xml)
{
    var movies = [];
    xml2js.parseString(xml, function(err, result){
        for(var p of result.tv.programme)
        {
            if(p.category)
            {
                if(p.category[0]._ == "Movie")
                {
                    movies.push(new Movie(p));
                }
            }
        }
    });
    
    return movies;
}

XMLtv.prototype.parseSeries = function(xml)
{
    var series = [];
    xml2js.parseString(xml, function(err, result){
        for(var p of result.tv.programme)
        {
            if(p.category)
            {
                if(p.category[0]._ == "Series")
                {
                    series.push(new Serie(p));
                }
            }
        }
    });
    
    return series;
}

module.exports = XMLtv;