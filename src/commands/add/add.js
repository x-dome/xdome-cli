"use strict";

const Helper        = new (require('./../../../bin/helper'));

exports.command     = 'add accesspoint';

exports.describe    = 'add a module for the selected `accessPoint`';

exports.builder     = function (yargs) {
    yargs
        .options({
            name            : {
                alias       : "n",
                describe    : "Name of the REST module",
                demandOption: true,
            },
            route           : {
                alias       : "r",
                describe    : 'AccessPoint Route',
                default     : '/',
                demandOption: true,
            },
            verbs           : {
                alias       : "v",
                describe    : "Verbs / Methods of the Access Points",
                default     : "GET",
                choices     : ["GET", "POST", "PUT", "DELETE"],
                type        : 'array',
            },
        });
    // .usage("$0 add accesspoint -n Test2 -r Test2 -v POST GET")

    return yargs;
};

exports.handler = function (argv) {
    Helper.createRestModule({
        name: argv.name,
        verbs: argv.verbs,
        route: argv.route,
    })
};
