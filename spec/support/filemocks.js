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

module.exports = FileMocks;