"use strict";

const util = require("fs");
// const config = require('./../../config');

class BaseModule {
    /* eslint-disable no-console, no-useless-escape */
    constructor(){
        // this.config = config;
    }

    pass(){
        let message = 'this component is not yet implemented and will be available in a future release version';
        return console.log(message);
    }

    isCurrentDirectoryRootFolder(){
        if (util.existsSync(process.cwd()+'/package.json')) {
            return { success: true, message: 'it is root' }
        }
        return { success: false, message: 'please navigate to your project root directory' }
    }

    destinationFolderExists(destinationPath){
        let destPath = destinationPath,
            fullPath = process.cwd()+ destPath
        if (util.existsSync(fullPath)) {
            // console.log('destination folder exists')
            return { success: true, message: 'destination folder already exists' }
        }
        // console.log('destination folder doesnt exist')
        return { success: false, message: 'destination folder doesnt exist' }
    }

    newDirectoryNameIsValid(directoryName){
        let isValid = true,
            errorMessage = 'an error ocurred while trying to validate the provided directory name';

        if(!directoryName || directoryName === ""){
            isValid = false
            errorMessage = "please provide a directory name.";
            // console.log(directoryName)
        }
        else{
            // check if directoryName have no spaces
            if (/\s/.test(directoryName)) {
                isValid = false
                errorMessage = "directory name " + "'" + directoryName + "'" + " should not contain spaces.";
                console.log(errorMessage)
            }
            // check if directoryName have no special characters
            if (/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/g.test(directoryName)) {
                isValid = false
                errorMessage = "directory name " + "'" + directoryName + "'" + " should not contain special characters.";
                // console.log(errorMessage)
            }
            // check if directoryName already exists
            if (util.existsSync(process.cwd()+'/'+directoryName)) {
                isValid = false
                errorMessage = "directory name " + "'" + directoryName + "'" + " already exists.";
                // console.log(errorMessage)
            }
        }

        if (!isValid){
            return { sucess: false, message: errorMessage };
        }
        return { sucess: true, message: 'new directory name is valid'};
    }

    printSpacedMessage(message){
        console.log('');
        console.log(message);
        console.log('');
    }
    /* eslint-enable no-console, no-useless-escape */
}

module.exports = BaseModule;
