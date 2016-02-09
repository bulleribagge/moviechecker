"use strict"

var Utils = require("./utils");

class movie
{
	constructor(m)
	{
        var utils = new Utils();
		this.title = m.title[0]._;
		this.description = m.desc[0]._;
        this.year = m.date == undefined ? '' : m.date[0];
        this.start = utils.parseDate(m.$.start);
        this.end = utils.parseDate(m.$.stop);
        this.length = (this.end.getTime() - this.start.getTime())/1000/60;
        this.directors = m.credits[0].director == undefined ? [] : m.credits[0].director;
        this.actors = m.credits[0].actor == undefined ? [] : m.credits[0].actor;
	}
}

module.exports = movie;