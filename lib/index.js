"use strict";

class Main {

    constructor(){
        // /**
        //  * Creates a base nodejs server template by git-cloning a defined repository
        //  *
        //  * @param {projectName} String a name for the project to be added
        //  */
        this.create = require('./commands/create/create');

        // /**
        //  * Adds a module to an already created project
        //  *
        //  * @param {moduleType} String the type of the module to add
        //  * @param {moduleName} String the name of the module to be added
        //  */
        this.add = require('./commands/add/add');

        // /**
        //  * Prints general information about xdome
        //  *
        //  */
        this.info = require('./commands/info/info');

        // /**
        //  * Prints useful information about how to use xdome
        //  *
        //  */
        this.help = require('./commands/help/help');

        // /**
        //  * Prints the current version of xdome. Allows to change the version to use.
        //  *
        //  * @param {method} String (optional) The name of the function to perfom
        //  */
        this.version = require('./commands/version/version');

        // /**
        //  * Downloads the latest version of xdome tool
        //  *
        //  */
        this.update = require('./commands/update/update');

        // /**
        //  * Prints recent activity log
        //  *
        //  * @param {pluginName} String the name of the plugin to be added
        //  */
        this.log = require('./commands/log/log');
    }
}

module.exports = Main;
