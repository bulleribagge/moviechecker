"use strict"

var Utils = require("./utils");

class Movie
{
	constructor(m)
	{
		this.title = m.title[0]._;
		this.description = m.desc[0]._;
        this.year = m.date == undefined ? '' : m.date[0];
        this.start = Utils.parseDate(m.$.start);
        this.end = Utils.parseDate(m.$.stop);
        this.length = (this.end.getTime() - this.start.getTime())/1000/60;
        this.directors = m.credits[0].director == undefined ? [] : m.credits[0].director;
        this.actors = m.credits[0].actor == undefined ? [] : m.credits[0].actor;
        this.type = "movie";
	}
}

module.exports = Movie;