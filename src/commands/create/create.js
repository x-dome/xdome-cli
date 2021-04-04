"use strict";

const fse           = require('fs-extra');
const Messages      = new (require('./../../../bin/messages'));

exports.command     = 'create [name]';

exports.describe    = 'Creates a project';

exports.builder     = function (yargs) {
    yargs
        .positional("name", {
            describe    : "Name of the project",
            default     : "xdome-example",
        });
    // .usage("$0 create -n SuperProject", "Test My Desc");

    return yargs;
};

exports.handler = function (argv) {
    const template_path = require("@x-dome/xdome-base-rest");
    let projectName = argv.name;
    fse.copySync(template_path.dirname, "./"+projectName);

    // eslint-disable-next-line one-var
    let xdomeInfo = fse.readJsonSync( process.cwd() + "/" + projectName + '/xdome.json' );
    xdomeInfo["basePath"] = "/"+projectName+"/api/";
    fse.writeJsonSync( process.cwd() + "/" + projectName + '/xdome.json' , xdomeInfo, {spaces: 2} )

    Messages.onProjectCreated(argv.name, projectName);
};
