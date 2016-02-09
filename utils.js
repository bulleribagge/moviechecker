function Utils()
{
    
}

Utils.prototype.parseDate = function(str)
{
    return new Date(str.slice(0,4) + "-" + str.slice(4,6) +"-"+ str.slice(6,8) +" "+ str.slice(8,10) + ":" + str.slice(10,12));
}

module.exports = Utils;