"use strict";

const BaseModule = require('./../BaseModule');

class Log extends BaseModule{
    constructor(){
        super();
    }

    init(/*...args*/) {
        super.pass();
    }

}

module.exports = new Log();
