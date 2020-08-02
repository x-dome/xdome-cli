"use strict";

const HELPER = require('../../../helper/helper');
const fs = require('fs-extra');
const template_path = require("xdome-base-rest");

class Create{
        constructor(){
        // eslint-disable-next-line
        const self = this;
    }

    cloneRepository(){
        fs.copySync(template_path.dirname, this.destinationDirectory);
        console.log(this.destinationDirectory + ' was created');
        // const { execSync } = require('child_process');
        // let res = execSync('npm install', {cwd: this.destinationDirectory});
    }

    init(...args) {
        let projectName = args[0];
        if(!HELPER.newDirectoryNameIsValid(projectName).sucess){
            return HELPER.printSpacedMessage(HELPER.newDirectoryNameIsValid(projectName).message)
        }
        else{
            this.projectName = projectName;
            this.destinationDirectory = "./" + this.projectName
            this.cloneRepository()
        }
    }

}

module.exports = new Create();
