function FileMocks()
{
    
}

FileMocks.prototype.getValidXMLWithNoDate = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme channel=\"svt1.svt.se\" start=\"20160206230000 +0100\" stop=\"20160206230500 +0100\"><title lang=\"sv\">Rapport</title><desc lang=\"sv\">Rapport. Textat sid. 199.</desc><date>2016</date><category lang=\"sv\">News</category></programme><programme channel=\"svt1.svt.se\" start=\"20160206230500 +0100\" stop=\"20160207005000 +0100\"><title lang=\"sv\">Adele och mumiens hemlighet</title><desc lang=\"sv\">Fransk-amerikansk långfilm från 2010. En kvinnlig författare och äventyrare är bosatt i Paris i början på 1900-talet.  I övernaturliga och fantastiska inslag följer vi henne och hennes kontakter med eventuella friare, poliser, monster och alla tänkbara typer. (Les aventures extraordinaires d'Adèle Blanc-Sec). HD. Sänds med 5.1 ljud.</desc><credits><director>Luc Besson</director></credits><category lang=\"sv\">Movie</category></programme></tv>";
}

FileMocks.prototype.getValidXMLWithNoActors = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme channel=\"svt1.svt.se\" start=\"20160206230000 +0100\" stop=\"20160206230500 +0100\"><title lang=\"sv\">Rapport</title><desc lang=\"sv\">Rapport. Textat sid. 199.</desc><date>2016</date><category lang=\"sv\">News</category></programme><programme channel=\"svt1.svt.se\" start=\"20160206230500 +0100\" stop=\"20160207005000 +0100\"><title lang=\"sv\">Adele och mumiens hemlighet</title><desc lang=\"sv\">Fransk-amerikansk långfilm från 2010. En kvinnlig författare och äventyrare är bosatt i Paris i början på 1900-talet.  I övernaturliga och fantastiska inslag följer vi henne och hennes kontakter med eventuella friare, poliser, monster och alla tänkbara typer. (Les aventures extraordinaires d'Adèle Blanc-Sec). HD. Sänds med 5.1 ljud.</desc><credits><director>Luc Besson</director></credits><date>2010</date><category lang=\"sv\">Movie</category></programme></tv>";
}

FileMocks.prototype.getValidXMLWithTwoDirectors = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme channel=\"svt1.svt.se\" start=\"20160206230000 +0100\" stop=\"20160206230500 +0100\"><title lang=\"sv\">Rapport</title><desc lang=\"sv\">Rapport. Textat sid. 199.</desc><date>2016</date><category lang=\"sv\">News</category></programme><programme channel=\"svt1.svt.se\" start=\"20160206230500 +0100\" stop=\"20160207005000 +0100\"><title lang=\"sv\">Adele och mumiens hemlighet</title><desc lang=\"sv\">Fransk-amerikansk långfilm från 2010. En kvinnlig författare och äventyrare är bosatt i Paris i början på 1900-talet.  I övernaturliga och fantastiska inslag följer vi henne och hennes kontakter med eventuella friare, poliser, monster och alla tänkbara typer. (Les aventures extraordinaires d'Adèle Blanc-Sec). HD. Sänds med 5.1 ljud.</desc><credits><director>Luc Besson</director><director>George Lucas</director><actor>Louise Bourgoin</actor><actor>Mathieu Amalric</actor><actor>Gilles Lellouche</actor><actor>Jean-Paul Rouve</actor><actor>Jacky Nercessian</actor></credits><date>2010</date><category lang=\"sv\">Movie</category></programme></tv>";
}

FileMocks.prototype.getValidXMLWithNoMovies = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme channel=\"svt1.svt.se\" start=\"20160206230000 +0100\" stop=\"20160206230500 +0100\"><title lang=\"sv\">Rapport</title><desc lang=\"sv\">Rapport. Textat sid. 199.</desc><date>2016</date><category lang=\"sv\">News</category></programme></tv>";
}

FileMocks.prototype.getValidXML = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme channel=\"svt1.svt.se\" start=\"20160206230000 +0100\" stop=\"20160206230500 +0100\"><title lang=\"sv\">Rapport</title><desc lang=\"sv\">Rapport. Textat sid. 199.</desc><date>2016</date><category lang=\"sv\">News</category></programme><programme channel=\"svt1.svt.se\" start=\"20160206230500 +0100\" stop=\"20160207005000 +0100\"><title lang=\"sv\">Adele och mumiens hemlighet</title><desc lang=\"sv\">Fransk-amerikansk långfilm från 2010. En kvinnlig författare och äventyrare är bosatt i Paris i början på 1900-talet.  I övernaturliga och fantastiska inslag följer vi henne och hennes kontakter med eventuella friare, poliser, monster och alla tänkbara typer. (Les aventures extraordinaires d'Adèle Blanc-Sec). HD. Sänds med 5.1 ljud.</desc><credits><director>Luc Besson</director><actor>Louise Bourgoin</actor><actor>Mathieu Amalric</actor><actor>Gilles Lellouche</actor><actor>Jean-Paul Rouve</actor><actor>Jacky Nercessian</actor></credits><date>2010</date><category lang=\"sv\">Movie</category></programme></tv>";
}

FileMocks.prototype.getValidXMLSerie = function(){
    return "<tv generator-info-name=\"xmltv.TVsajten.com\" generator-info-url=\"http://tvsajten.com/xmltv\"><programme start=\"20160306231500 +0100\" stop=\"20160306234500 +0100\" channel=\"svt24.svt.se\"><title lang=\"sv\">Tvärs över Sydamerika</title><desc lang=\"sv\">Norsk resereportageserie från 2014. Reskamraterna i \"Team Bachstad\" - Øystein Bache och Rune Gokstad - har tagit sig för att korsa den sydamerikanska kontinenten, en bilresa på närmare 6000 km. Denna gång: expeditionen är framme i Argentina, där Øystein och Rune får uppleva både att stoppas av narkotikapolisen och närkontakt med en krokodil. Från 1/3 i SVT1. Även i SVT1 8/3.</desc><date>2014</date><category lang=\"sv\">Series</category><episode-num system=\"xmltv_ns\">0 . 3/6 .</episode-num><episode-num system=\"onscreen\">Del 4 av 6 säsong 1</episode-num></programme></tv>";
}

FileMocks.prototype.getComposedEmail = function(){
    return `<h1>Filmer</h1><b>söndag, februari 21a</b><p>01:50 Paul 2011</p><p>03:50 Paul 2 2013</p><b>måndag, februari 22a</b><p>14:35 Flerp 1956</p><b>tisdag, februari 23e</b><p>13:55 Flottans glada gossar 1954</p><p>23:30 En gång om året 2012</p><h1>Seriepremiärer</h1><b>söndag, februari 21a</b><p>21:00 Ansikte i ansiktet</p><p>21:00 House of Thrones</p><b>måndag, februari 22a</b><p>20:00 Game of Cards</p>`;
}

module.exports = FileMocks;