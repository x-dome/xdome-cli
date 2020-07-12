"use strict";

const HELPER = require('../../../helper/helper');

let template = require('./templates/ID_accessPoint');

class accessPoint{

    constructor(){
    }


    init(...args){
        let self = this; 
        const blueprintObject = HELPER.getFileSystemBlueprint(__dirname);

        let commandParametersArray = args;
        let parametersValues = {
            moduleName: (args[0]!=undefined)?args[0]:undefined,
            rootDirPath: '/src/modules',
        };

        // validate you are in an nodejs project root directory (there's a package.json)
        if (!HELPER.isCurrentDirectoryRootFolder().success){
            return HELPER.printSpacedMessage("please navigate to your project's root directory");
        }



        // validate if destination folder ('/modules') exists
        if (!HELPER.destinationFolderExists(parametersValues.rootDirPath).success){
            return HELPER.printSpacedMessage('destination folder ' + 
            parametersValues.rootDirPath
            + ' not found.')
        }


        // validate folder to create has a valid naming
        if(!HELPER.newDirectoryNameIsValid(parametersValues.moduleName).sucess){
            return HELPER.printSpacedMessage(HELPER.newDirectoryNameIsValid(parametersValues.moduleName).message)
        }


        // validate that there is not a folder with the same name that the one that will be created
        if(HELPER.destinationFolderExists(parametersValues.rootDirPath+'/'+parametersValues.moduleName).success){
            console.log(parametersValues.rootDirPath)
            return HELPER.printSpacedMessage("there is a '" + parametersValues.rootDirPath+'/'+parametersValues.moduleName + "' folder already created in '" + parametersValues.moduleName + "'.")
        }
        
        // HELPER.validateCommandParameters()
            // return error if something is wrong


        HELPER.createFileSystemFromBluePrint(
            blueprintObject, 
            commandParametersArray, 
            parametersValues);

    }

}

module.exports = new accessPoint();
