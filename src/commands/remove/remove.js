"use strict";

exports.command     = 'remove <command>'

exports.describe    = 'REMOVE';

exports.builder = function (yargs) {
    return yargs.commandDir('commands');
}

exports.handler = function () {}
