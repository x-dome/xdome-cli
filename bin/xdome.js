#!/usr/bin/env node
"use strict";

// eslint-disable-next-line no-unused-vars
const logger = require("./../src/commons/logger");

const yargs = require('yargs');

const createModule  = require('./../src/commands/create/create');
const addModule     = require('./../src/commands/add/add');

yargs
    .command(createModule)
    .command(addModule)
    .help()
    .hide("version")
    .hide("help")
    .argv;

// Crea módulos REST a partir de una definición Swagger en formato JSON (no YAML)
// yargs
//     .scriptName("project-creation")
//     .usage('Usage: $0 <cmd> [options]')
//     .command('add+ accesspoints', 'adds accesspoints reading a swagger json file', (yargs) => {

//         yargs.option('r', {
//             alias: 'swaggerJson',
//             description: 'reference to a swagger json file',
//         })
//             .demand('j')
//             .alias('swaggerJson', 'j')
//     }, function (argv) {

//         let swaggerJsonRoute = argv.swaggerJson;

//         if (!fse.pathExistsSync(swaggerJsonRoute)){
//             return Messages.swaggerJsonPathDoesNotExist()
//         }

//         // eslint-disable-next-line one-var
//         let swaggerJson = fse.readJsonSync(swaggerJsonRoute)

//         Helper.createRestModulesFromSwaggerJson(swaggerJson);
//     })
//     .help()
//     .argv
