"use strict";

const BaseModule = require('./../BaseModule');
const fs = require('fs-extra');
const template_path = require("xdome-base");

class Create extends BaseModule {
    constructor(){
        super();
        // eslint-disable-next-line
        const self = this;
    }

    cloneRepository(){
        fs.copySync(template_path.dirname, this.destinationDirectory);
        // const { execSync } = require('child_process');
        // let res = execSync('npm install', {cwd: this.destinationDirectory});
    }

    init(...args) {
        let projectName = args[0];
        if(!super.newDirectoryNameIsValid(projectName).sucess){
            return super.printSpacedMessage(super.newDirectoryNameIsValid(projectName).message)
        }
        else{
            this.projectName = projectName;
            this.destinationDirectory = "./" + this.projectName
            this.cloneRepository()
        }
    }

}

module.exports = new Create();
