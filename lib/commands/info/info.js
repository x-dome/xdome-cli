"use strict";

const HELPER = require('../../../helper/helper');

class Info{
        /* eslint-disable no-console, one-var, no-unused-vars */
    constructor(){
        const self = this;
    }

    init(...args) {
        let usage = 'xdome [version] [help] [info] [log] [update] [<args>]'
        console.log();
        console.log(usage)
        console.log();

        let commonCommandsTitle = 'These are common xdome commands:'
        console.log(commonCommandsTitle)
        console.log();

        let createCommand1 = 'create a base NodeJS server'
        let createCommand2 = '      create    Clones server repository template into a new directory'
        console.log(createCommand1)
        console.log(createCommand2)
        console.log();

        let addCommand1 = 'start working with your server'
        let addCommand2 = '      add    Adds standarized functionality to the server'
        console.log(addCommand1)
        console.log(addCommand2)
        console.log();
    }
    /* eslint-enable no-console, one-var, no-unused-vars */
}

module.exports = new Info();
