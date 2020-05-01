#!/usr/bin/env node

"use strict";

const Main = new(require('../lib/index.js'))();

/* Delete the 0 and 1 argument ('/usr/local/bin/node' and '/usr/local/bin/xdome') */
// let args = process.argv.splice(process.execArgv.length + 2);
let args = process.argv.splice(2, process.argv.length),
    commands = {
        create: {
            defaultMethod: 'init', /* server */
        },
        add: {
            defaultMethod: 'init',  /* plugin <PLUGIN_NAME> */
        },
        version: {
            defaultMethod: 'init',
        },
        help: {
            defaultMethod: 'init',
        },
        info: {
            defaultMethod: 'init',
        },
        log: {
            defaultMethod: 'init',
        },
        update: {
            defaultMethod: 'init',
        },
    },
    commandName = (args[0]!=undefined)?args[0].toLowerCase():undefined,
    commandIsUndefined = (commandName===undefined)?true:false,
    isValidCommand = Object.keys(commands).includes(commandName),
    commandParameters = args.splice(1);

const printUnknownCommandErrorMessage = function() {
    const message = "xdome: '" + commandName  + "' is not an xdome command. See 'xdome help'."
    printMessage(message);
};
const printMessage = function(/*message*/) {
    // console.log('');
    // console.log(message);
    // console.log('');
};

const init = function() {
    if (commandIsUndefined) {
        return Main.info[commands['info'].defaultMethod]();
    }

    if (isValidCommand) {
        try{
            Main[commandName][commands[commandName].defaultMethod](...commandParameters)
        }
        catch(e){
            // console.log(e)
            printMessage("xdome: an unexpected error ocurred.")
        }
    }
    else{
        printUnknownCommandErrorMessage();
    }
};

/* ########## */
init();
/* ########## */
