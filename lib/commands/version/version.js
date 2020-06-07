"use strict";

var pjson = require('./../../../package.json');

class Version {
    constructor(){}

    init(/*...args*/) {
        // eslint-disable-next-line no-console
        console.log('xdome version: ' + pjson.version);
    }

}

module.exports = new Version();
