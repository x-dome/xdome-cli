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

        let pluginBasePath = __dirname;


        // Temporal tweak
        pluginBasePath = (pluginBasePath.substr(0,pluginBasePath.lastIndexOf("node_modules")+13))+"xdome-extension-rest/src"

        const fs = require('fs-extra');
        const exists = fs.pathExistsSync(process.cwd()+"/src/plugins/accessPoints.js");

        if(!exists){
            let src = (__dirname.substr(0,__dirname.lastIndexOf("node_modules")+13))+"xdome-extension-rest/src/plugin/accessPoints.js";
            let dest = process.cwd()+"/src/plugins/accessPoints.js";
            // debugger;
            fs.copySync(src, dest);
        }

        let xdomeJson = fs.readJsonSync(process.cwd()+'/xdome.json')
        xdomeJson.accessPoints.push({ "name" : args[0] })
        fs.writeJsonSync( process.cwd()+'/xdome.json', xdomeJson, {spaces: 2} )
        // Temporal tweak

        HELPER.createFileSystemFromBluePrint(
            pluginBasePath,
            blueprintObject, 
            args
            // commandParametersArray
            // , parametersValues            
        );

        // debugger;

    }

}

module.exports = new accessPoint();
