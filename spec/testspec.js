var XMLtv = require('../xmltv');
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
        var movies = xmltv.parseXML(fm.getValidXML());
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
    });
    
    it("with empty input", function()
    {
       var movies = xmltv.parseXML(fm.getValidXMLWithNoMovies());
       expect(movies.length).toEqual(0);  
    });
    
    it("with two directors", function()
    {
       var movies = xmltv.parseXML(fm.getValidXMLWithTwoDirectors());
       expect(movies[0].directors).toEqual(['Luc Besson', 'George Lucas']);  
    });
    
    it("with no actors", function()
    {
       var movies = xmltv.parseXML(fm.getValidXMLWithNoActors());
       expect(movies[0].actors).toEqual([]);  
    });
    
    it("with no date", function()
    {
       var movies = xmltv.parseXML(fm.getValidXMLWithNoDate());
       expect(movies[0].year).toEqual('');  
    });
});