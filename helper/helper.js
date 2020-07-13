"use strict";

const util = require("fs");
const fse = require("fs-extra");

class Helper {
    constructor(){

        this.pass = function(){
            let message = 'this component is not yet implemented and will be available in a future release version';
            return console.log(message);
        }
    
        this.checkIfCommandIsUndefined = function(commandName){
            let commandIsUndefined = (commandName===undefined)?true:false;
            return commandIsUndefined;
        };
        
        this.checkIfCommandExists = function(commandsList, commandName){
            let commandExists = false;
            return commandExists = commandsList.includes(commandName);
        };
    
        this.printSpacedMessage = function(message){
            console.log('');
            console.log(message);
            console.log('');
        }

        this.convertFirstCharactertoUppercaseRestLowercase = function(string) {
            return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        }
    
        this.isCurrentDirectoryRootFolder = function(){
            if (util.existsSync(process.cwd()+'/package.json')) {
                return { success: true, message: 'it is root' }
            }
            return { success: false, message: 'please navigate to your project root directory' }
        }
    
        this.destinationFolderExists = function(destinationPath){
            let destPath = destinationPath,
                fullPath = process.cwd()+ destPath
            // console.log(fullPath)
            if (util.existsSync(fullPath)) {
                // console.log('destination folder exists')
                // console.log(fullPath)
                return { success: true, message: 'destination folder already exists' }
            }
            // console.log('destination folder doesnt exist')
            return { success: false, message: 'destination folder doesnt exist' }
        }
    
        this.newDirectoryNameIsValid = function(directoryName){
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

        //////////////////////////////////////////////////////////////////////


        this.getFileSystemBlueprint = function(basePath){
            return fse.readJsonSync(basePath+'/fileSystemBlueprint.json');
        }

        this.getFileTemplateByID = function(fileId){
            let fileName = fileId + '.json';
            return fse.readJsonSync(basePath+'/templates/' + fileName);
        }

        this.validateCommandParameters = function(){


        }

        this.setFileParameters = function(){
            let self = this; 
            // placeholder ==> value
        }

        this.customiceFileTemplate = function(){
            // let verbs = (args[0]!=undefined)?args[0]:undefined;
            // if(args[1]==undefined || args[2]==undefined){
            //     return HELPER.printSpacedMessage("please make sure you entered the correct parameters. example: --verbs=[GET, POST, PUT] --route=exampleroute")
            // }
            // else{
            //     args.forEach(function(itm, idx){
            //         //verbs
            //         if ( args[idx].includes( self.parameters[0].command+"=" ) ) {
            //             console.log(self.parameters[0].command+"=")
            //             console.log(args[idx])
            //             self.parameters[0].value = args[idx].replace("--verbs=", "");
            //         }
            //         //route
            //         if ( args[idx].includes( self.parameters[1].command+"=" ) ) {
            //             console.log(self.parameters[1].command+"=")
            //             console.log(args[idx])
            //             self.parameters[1].value = args[idx].replace("--route=", "");
            //         }
            //     })
            // }
        }


        this.createFileContentFromFileTemplate = function(){

        }

        this.createFile = function(filePath, fileContent, config) {
            console.log('executing createFile function')
            // util.writeFile( filePath, fileContent, (error) => {
            //     if (error) {
            //         console.error(error)
            //     }
            //     else {
            //         console.log('file was made')
            //     }
            // });
            fse.writeFileSync( filePath, fileContent, (error) => {
                if (error) {
                    console.error(error)
                }
                else {
                    console.log('file was made')
                }
            });
        }

        this.createDir = function(dirPath, dirName) {
            console.log('executing createFolder function')
                    //    // const dir = '/tmp/this/path/does/not/exist'
        //    // fs.ensureDirSync(dir)
        //    // // dir has now been created, including the directory it is to be placed in
        //    console.log('creating dir ' + itm.name);
        //    const dirPath = process.cwd() + '/' + itm.name;
        //    fse.ensureDirSync(dirPath)
            fse.ensureDirSync(dirPath);
        }

        this.createFileSystemElements  = function(itm, currentDirPath){

            // ask for elements property and iterate it

            // on each element, execute creation of, either:
            //         - file
            //         - folder
        
            // when done, ask for children property
            //     if has property child_element and iterate it 
        
            //     on each child_element, execute creation of, either:
            //         - file
            //         - folder
            console.log("executing createFileSystemFromBluePrint")

            // EXECUTE CREATE ELEMENT FUNCTION
            if (itm.hasOwnProperty('type') && itm.type === 'dir') { 

                let dirName = ( 
                    itm.hasOwnProperty('name') && 
                    typeof itm.name === 'object' 
                    && itm.name.hasOwnProperty('valueMarker')  )? itm.name.valueMarker: itm.name;

                let dirPath = currentDirPath;
                                            
                // TODO// 
                this.createDir(dirPath, dirName);

                // AND ASK FOR CHILD ELEMENTS
                // IF CHILD ELEMENTS 
                        // ITERATE 
                // EXECUTE CREATE ELEMENT FUNCTION

                if (itm.hasOwnProperty('child_elements')) {
                    let nestedDirPath = dirPath + "/" + dirName;
                    itm.child_elements.forEach(function(subItm, subIdx){
                        this.createFileSystemElements(subItm, nestedDirPath)
                    })
                }

            }

            if (itm.hasOwnProperty('type') && itm.type === 'file'){ 
                let fileName = false;
                let templateId = false;
                
                fileName = ( 
                    itm.hasOwnProperty('name') && 
                    typeof itm.name === 'object' 
                    && itm.name.hasOwnProperty('valueMarker')  )? itm.name.valueMarker: itm.name;


                templateId = ( itm.hasOwnProperty('template_id') )? itm.template_id: false;

                // "params": [
                //     {   
                //         "command": "--verbs", 
                //         "placeholder" : "{verbs}",     
                //         "valueMarker" : "ACCESS_POINT_ALLOWED_VERBS" 
                //     }, 
                //     {   
                //         "command": "--route", 
                //         "placeholder" : "{route}",     
                //         "valueMarker" : "ACCESS_POINT_ROUTE_PATH" 
                //     }, 
                //     {   
                //         "command": false,     
                //         "placeholder" : "{className}", 
                //         "valueMarker" : "ACCESS_POINT_CLASS_NAME" 
                //     }
                // ]      

                // let valueMarkersObj = {
                //     "MODULE_NAME": "",
                //     "ACCESS_POINT_FILE_NAME": "",
                //     "ACCESS_POINT_ALLOWED_VERBS": [],
                //     "ACCESS_POINT_ROUTE_PATH": "",
                //     "ACCESS_POINT_CLASS_NAME": "",
                //     "BUSINESS_LAYER_CLASS_NAME": ""
                // };
                
                // TODO // this.customiceFileTemplate
                    // TODO // this.setFileParameters

                // TODO // this.createFileContentFromFileTemplate

                // TODO// this.createFile(filePath, fileContent, config);

            } 

        };

        this.createFileSystemFromBluePrint = function(
                bluprintObject,
                commandParametersArray, 
                parametersValues
            ){

            console.log(bluprintObject)
            console.log(commandParametersArray)
            console.log(parametersValues)
        
            let elements = bluprintObject.elements || []; 
            if (elements.length == 0 ){
                return console.log('no actions to perform for this plugin template. check the plugin template structure')
            }

            elements.forEach(function(itm, idx){
                this.createFileSystemElements(itm, parametersValues.rootDir)
            })
                    
        }



    }



}

module.exports = new Helper();

