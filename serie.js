"use strict"

var Utils = require("./utils");

class Serie
{
	constructor(m)
	{
		this.title = m.title[0]._;
		this.description = m.desc[0]._;
        this.year = m.date == undefined ? '' : m.date[0];
        this.start = Utils.parseDate(m.$.start);
        this.end = Utils.parseDate(m.$.stop);
        this.length = (this.end.getTime() - this.start.getTime())/1000/60;
        this.season = parseInt(m['episode-num'][0]._.match(/\d+/g)[0] + 1);
        this.episode = parseInt(m['episode-num'][0]._.match(/\d+/g)[1]) + parseInt(1);
        this.type = "serie";
	}
}

module.exports = Serie;