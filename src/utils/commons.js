"use strict";

const fs            = require('fs-extra');

const isProjectPath = function(){
    let result      = false;
    if ( !fs.existsSync(process.cwd()+'/xdome.json') ) {
        // console.log("")
        // console.log("Por favor valida que estás ejecutando este comando dentro de un proyecto xdome")
        // console.log("")
        result      = true;
    }

    return result;
}

module.exports = {
    isProjectPath,
};
