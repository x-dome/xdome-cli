#!/usr/bin/env node
"use strict";
const Main = new(require('../lib/index.js'))();
const CONFIG = require('../config');
const HELPER = require('../helper/helper');

const init = function() {

    const commandsList = CONFIG.commands.list;
    let args = process.argv.splice(2, process.argv.length);
    let commandName = (args[0]!=undefined)?args[0].toLowerCase():undefined;
    let commandParameters = args.splice(1);

    if (HELPER.checkIfCommandIsUndefined(commandName)) {
        return Main.info.init();
    }

    if (!HELPER.checkIfCommandExists(commandsList, commandName)) {
        const message = "xdome: '" + commandName  + "' is not an xdome command. See 'xdome help'."
        return HELPER.printSpacedMessage(message);
    }

    try{
        Main[commandName].init(...commandParameters)
    }
    catch(e){
        HELPER.printSpacedMessage("xdome: and unexpected error ocurred.")
    }
};

init();
