var XMLtv = require('../xmltv');
var Util = require('../utils');
var FileMocks = require('./support/filemocks');

describe("Parse test", function()
{
    var fm;
    var xmltv = new XMLtv('a', new Date());
    beforeAll(function(){
        fm = new FileMocks();
    });
    
    it("with valid input", function()
    {
        var movies = xmltv.parseMovies(fm.getValidXML());
        expect(movies.length).toEqual(1);
        expect(movies[0].title).toEqual("Adele och mumiens hemlighet");
        expect(movies[0].description).toEqual("Fransk-amerikansk långfilm från 2010. En kvinnlig författare och äventyrare är bosatt i Paris i början på 1900-talet.  I övernaturliga och fantastiska inslag följer vi henne och hennes kontakter med eventuella friare, poliser, monster och alla tänkbara typer. (Les aventures extraordinaires d'Adèle Blanc-Sec). HD. Sänds med 5.1 ljud.");
        expect(movies[0].year).toEqual('2010');
        expect(movies[0].start).toEqual(new Date('2016-02-06 23:05'));
        expect(movies[0].end).toEqual(new Date('2016-02-07 00:50'));
        expect(movies[0].length).toEqual(105);
        expect(movies[0].directors).toEqual(['Luc Besson']);
        expect(movies[0].actors).toEqual([
            'Louise Bourgoin',
            'Mathieu Amalric',
            'Gilles Lellouche',
            'Jean-Paul Rouve',
            'Jacky Nercessian'
        ]);
        expect(movies[0].type).toEqual('movie');
    });
    
    it("with empty input", function()
    {
       var movies = xmltv.parseMovies(fm.getValidXMLWithNoMovies());
       expect(movies.length).toEqual(0);  
    });
    
    it("with two directors", function()
    {
       var movies = xmltv.parseMovies(fm.getValidXMLWithTwoDirectors());
       expect(movies[0].directors).toEqual(['Luc Besson', 'George Lucas']);  
    });
    
    it("with no actors", function()
    {
       var movies = xmltv.parseMovies(fm.getValidXMLWithNoActors());
       expect(movies[0].actors).toEqual([]);  
    });
    
    it("with no date", function()
    {
       var movies = xmltv.parseMovies(fm.getValidXMLWithNoDate());
       expect(movies[0].year).toEqual('');  
    });
    
    it("with tv serie", function(){
       var tvseries = xmltv.parseSeries(fm.getValidXMLSerie());
       expect(tvseries[0].season).toEqual(1);
       expect(tvseries[0].episode).toEqual(4);
       expect(tvseries[0].type).toEqual('serie');
    });
});

describe("Util test", function(){
    var fm;
    
    beforeAll(function(){
        fm = new FileMocks();
    });
    
   it("url creator", function(){
      var res = Util.getUrlsForChannelAndDate("svt1.svt.se", new Date("2016-02-13"), 7);
      expect(res[0]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-13.xml.gz");
      expect(res[1]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-14.xml.gz");
      expect(res[2]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-15.xml.gz");
      expect(res[3]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-16.xml.gz");
      expect(res[4]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-17.xml.gz");
      expect(res[5]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-18.xml.gz");
      expect(res[6]).toEqual("http://xmltv.tvsajten.com/xmltv/svt1.svt.se_2016-02-19.xml.gz");
   });
   
   it("compose test", function(){
      var movies = [
          {start: new Date('2016-02-21 01:50'), type: 'movie', title: 'Paul', year: '2011'},
          {start: new Date('2016-02-21 03:50'), type: 'movie', title: 'Paul 2', year: '2013'},
          {start: new Date('2016-02-22 14:35'), type: 'movie', title: 'Flerp', year: '1956'},
          {start: new Date('2016-02-23 13:55'), type: 'movie', title: 'Flottans glada gossar', year: '1954'},
          {start: new Date('2016-02-23 23:30'), type: 'movie', title: 'En gång om året', year: '2012'}
      ];
      var series = [
            {start: new Date('2016-02-21 21:00'), type: 'serie', title: 'Ansikte i ansiktet', season: 1, episode: 1},
            {start: new Date('2016-02-21 21:00'), type: 'serie', title: 'House of Thrones', season: 1, episode: 1},
            {start: new Date('2016-02-22 20:00'), type: 'serie', title: 'Game of Cards', season: 1, episode: 1}  
      ];
      
      var html = Util.compose(movies, series);
      expect(html).toEqual(fm.getComposedEmail());
   });
   
   it("pad digits", function(){
      expect(Util.pad(2, 2)).toEqual("02");
      expect(Util.pad(20, 2)).toEqual("20"); 
   });
});