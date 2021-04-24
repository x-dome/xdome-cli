"use strict";

// const fileUtils     = require('./../../../utils/files');

exports.command     = 'accesspoint';

exports.describe    = 'remove a module for the selected `accessPoint`';

exports.builder     = function (yargs) {
    yargs
        .options({
            name            : {
                alias       : "n",
                describe    : "Name of the REST module",
                demandOption: true,
            },
        });

    return yargs;
};

exports.handler = function (/*argv*/) {
    // console.log("HERE");
};
