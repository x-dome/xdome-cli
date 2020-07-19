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

        this.validateCommandParameters = function(){


        }

        this.setFileParameters = function(){
            let self = this; 
            // placeholder ==> value
        }

        this.customiceFileTemplate = function(){


        }


        this.createFileContentFromFileTemplate = function(){


        }

        this.createFile = function(filePath, fileContent, config) {
            console.log('executing createFile function')
            util.writeFile( filePath, fileContent, (error) => {
                if (error) {
                    console.error(error)
                }
                else {
                    console.log('file was made')
                }
            });
        }

        this.createFileSystemFromBluePrint = function(
                bluprintObject,
                commandParametersArray, 
                parametersValues
            ){

            console.log(bluprintObject)
            console.log(commandParametersArray)
            console.log(parametersValues)

            return;

            let valueMarkersObj = {
                "MODULE_NAME": "",
                "ACCESS_POINT_FILE_NAME": "",
                "ACCESS_POINT_ALLOWED_VERBS": [],
                "ACCESS_POINT_ROUTE_PATH": "",
                "ACCESS_POINT_CLASS_NAME": "",
                "BUSINESS_LAYER_CLASS_NAME": ""
            };

            Object.keys(bluprintObject).forEach(function (key) {
        
                if (

                        bluprintObject[key] !== null 
                        && typeof bluprintObject[key] === 'object' 
                        // && key === 'children'   
                        
                        ) {


                            bluprintObject[key].forEach(function(itm, idx){
                

                                if (itm.hasOwnProperty('type') && itm.type === 'dir') {
                                    // create dir
                                    
                                    // const dir = '/tmp/this/path/does/not/exist'
                                    // fs.ensureDirSync(dir)
                                    // // dir has now been created, including the directory it is to be placed in
                                    console.log('creating dir ' + itm.name);
                                    const dirPath = process.cwd() + '/' + itm.name;
                                    fse.ensureDirSync(dirPath)
                                    createPluginFromBluePrint(itm);
                                }
                                
                                if (itm.hasOwnProperty('type') && itm.type === 'file'){
                                    // create file from template
                                    console.log('creating file ' + itm.name);


                                    // customiceFileTemplate
                                        // setFileParameters
                                        
                                    // createFileContentFromFileTemplate


                                    // createFile
                                }

                            });

                            /////////////////////////////
            
                            // bluprintObject[key].forEach(function(itm, idx){
                
                            //     if(itm.hasOwnProperty('type')){
                            //         console.log('has own property type')

                            //         if (itm.type === 'dir') {
                            //             // create dir
                                        
                            //             // const dir = '/tmp/this/path/does/not/exist'
                            //             // fs.ensureDirSync(dir)
                            //             // // dir has now been created, including the directory it is to be placed in
                            //             console.log('creating dir ' + itm.name);
                            //             const dirPath = process.cwd() + '/' + itm.name;
                            //             fse.ensureDirSync(dirPath)
                            //             createPluginFromBluePrint(itm);
                            //         }
                            //         else if (itm.type === 'file'){
                            //             // create file from template
                            //             console.log('creating file ' + itm.name);


                            //             // customiceFileTemplate
                            //                 // setFileParameters
                                            
                            //             // createFileContentFromFileTemplate


                            //             // createFile
                            //         }

                            //     }

                            // });

                            /////////////////////////////


                }
                else{
                    console.log('not passing condition bluprintObject[key] !== null  && typeof bluprintObject[key] === object && key === children')
                }

            });



        }

    }



}

module.exports = new Helper();



        // this.createDir = function(fullPath) {
        //     printSpacedMessage('creating directory')
        //     util.mkdir(fullPath, {recursive:true}, function(error){
        //         if (error) {
        //             console.log('an error ocurre while trying to create the directory folder')
        //         }
        //         else {
        //             return fullPath; 
        //         }
        //     });
        // };       
        
        

        // CREATE DIR
        // const dir = '/tmp/this/path/does/not/exist'
        // fs.ensureDirSync(dir)
        // // dir has now been created, including the directory it is to be placed in

        // CREATE FILE
        // const file = '/tmp/this/path/does/not/exist/file.txt'
        // fs.ensureFileSync(file)
            // // file has now been created, including the directory it is to be placed in

        // READ JSON FILE
        // const packageObj = fs.readJsonSync('./package.json')
            // console.log(packageObj.version) // => 2.0.0


        // pathExistsSync(file)