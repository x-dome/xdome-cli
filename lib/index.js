"use strict";

class Main {

    constructor(){
        // /**
        //  * Creates a base nodejs server template by git-cloning a defined repository
        //  *
        //  * @param {projectName} String a name for the project to be added
        //  */
        // this.create = require('./modules/create/index').create;
        // this.create = require('./modules/create/index').customClassMethod;
        this.create = require('./modules/create/index');

        // this.create = new(require('./modules/create/index'))();

        // /**
        //  * Adds a module to an already created project
        //  *
        //  * @param {moduleType} String the type of the module to add
        //  * @param {moduleName} String the name of the module to be added
        //  */
        this.add = require('./modules/add/index');

        // /**
        //  * Prints general information about xdome
        //  *
        //  */
        this.info = require('./modules/info/index');

        // /**
        //  * Prints useful information about how to use xdome
        //  *
        //  */
        this.help = require('./modules/help/index');

        // /**
        //  * Prints the current version of xdome. Allows to change the version to use.
        //  *
        //  * @param {method} String (optional) The name of the function to perfom
        //  */
        this.version = require('./modules/version/index');

        // /**
        //  * Downloads the latest version of xdome tool
        //  *
        //  */
        this.update = require('./modules/update/index');

        // /**
        //  * Prints recent activity log
        //  *
        //  * @param {pluginName} String the name of the plugin to be added
        //  */
        this.log = require('./modules/log/index');
    }
}

module.exports = Main;
