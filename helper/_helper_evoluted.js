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

        this.getFileTemplateByID = function(basePath, fileId){
            let fileName = fileId // + '.js';
            // return fse.readJsonSync(basePath+'/templates/' + fileName);
            return require(basePath + '/templates/' + fileName);
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
            console.log()
            console.log(filePath)
            console.log()
            console.log(fileContent)
            console.log()

            // fse.writeFileSync( process.cwd() + filePath, fileContent, (error) => {
            //     if (error) {
            //         console.error("error - -")
            //         console.error(error)
            //         console.error("--------")
            //     }
            //     else {
            //         console.log('file was made')
            //     }
            // });
            // fse.writeFileSync( process.cwd() + filePath,   fileContent   );

            fse.ensureFileSync( process.cwd() + filePath );
            fse.writeFileSync(
                process.cwd() + filePath,
                fileContent //JSON.stringify(fileContent)
            );
        }
            
        this.createDir = function(dirPath, dirName) {
            console.log('executing createDir function')
                    //    // const dir = '/tmp/this/path/does/not/exist'
        //    // fs.ensureDirSync(dir)
        //    // // dir has now been created, including the directory it is to be placed in
        //    console.log('creating dir ' + itm.name);
        //    const dirPath = process.cwd() + '/' + itm.name;
        //    fse.ensureDirSync(dirPath)
            console.log(process.cwd() + '/' + dirPath + '/' + dirName)
            fse.ensureDirSync( process.cwd() + '/' + dirPath + '/' + dirName     );
        }

        this.createFileSystemElements  = function(itm, currentDirPath, blueprintObject, cliParamsArr, pluginBasePath, currentIndex){
            
            console.log()
            console.log("-------------------------")
            console.log("currentIndex: ", currentIndex)
            console.log("currentDirPath: " + currentDirPath)
            console.log("-------------------------")
            console.log()


            let self = this;

            let valueMarkers = [];

            // if ( itm.hasOwnProperty('params') && itm.params.length > 0 ) {

            //     console.log("YESS has params")

                if (cliParamsArr.length == 0 ) {
                    // handle missing params error
                }
                else{

                    if (blueprintObject.cliParamsConfig.length == 0) {
                        // handle missing params error
                        // return 
                    }

                    // bluprintObject.cliParamsConfig.forEach(function(itm, idx){

                    // })

                    // console.log(cliParamsArr)
                    cliParamsArr.forEach(function(cliParamItm, cliParamIdx){

                        let paramConfig = blueprintObject.cliParamsConfig.filter(function(el) {
                            let position = cliParamIdx + 1;
                            return el.entryPosition === position;
                        })[0];
                        
                        paramConfig.valueMarker.forEach(function(paramConfigItm, paramConfigIdx){
                            let valuetoAdd = (paramConfig.hasOwnProperty('commandPrefix') && paramConfig.commandPrefix.length > 0)? 
                            cliParamItm.replace( paramConfig.commandPrefix + "=" , "" ) : cliParamItm;

                            let toAdd = {
                                valueMarkerName : paramConfigItm, 
                                value: valuetoAdd
                            }
                            valueMarkers.push(toAdd)
                        })

                    });

                    // validate needed params for this template are somehow provided
                        // handle missing params error
                }

            // }
            // else{
                
            //     console.log("NOO has params")
            //     console.log(itm)
            // }
            console.log()
            console.log("valueMarkers -------------------")
            // console.log()
            console.log(valueMarkers)
            // console.log()
            console.log("valueMarkers -------------------")
            console.log()

            
            // EXECUTE CREATE ELEMENT FUNCTION
            if (itm.hasOwnProperty('type') && (itm.type === 'dir' || itm.type === 'folder') ) { 

                // console.log("itm.hasOwnProperty('type') && itm.type === 'dir'")

                let dirData = itm;

                // let dirName = ( 
                //     dirData.hasOwnProperty('name') && 
                //     typeof dirData.name === 'object' 
                //     && dirData.name.hasOwnProperty('valueMarker')  )? self.getValueByValueMarker(dirData.name.valueMarker): dirData.name;

                let dirName;

                if ( dirData.hasOwnProperty('name') && typeof dirData.name === 'object' && dirData.name.hasOwnProperty('valueMarker') ) {

                    // console.log()
                    // console.log()
                    // console.log(valueMarkers)
                    // console.log()
                    // console.log()

                    dirName = valueMarkers.find(el => {
                        return el.valueMarkerName === dirData.name.valueMarker
                    }).value;

                }
                else{
                    dirName = dirData.name;
                };
                    

                let dirPath = currentDirPath;
                                            
                this.createDir(dirPath, dirName);

                // AND ASK FOR CHILD ELEMENTS // IF CHILD ELEMENTS  // ITERATE  // EXECUTE CREATE ELEMENT FUNCTION

                if (dirData.hasOwnProperty('child_elements')) {


                    let nestedDirPath = dirPath + "/" + dirName;

                    // console.log("----- nestedDirPath")
                    // console.log(nestedDirPath)
                    console.log()
                    console.log()
                    console.log()
                    console.log()
                    console.log("nestedDirPath")
                    console.log(nestedDirPath)
                    console.log("nestedDirPath")
                    console.log()
                    console.log()
                    console.log()
                    console.log()
                    console.log()

                    dirData.child_elements.forEach(function(subItm, subIdx){
                        self.createFileSystemElements(subItm, nestedDirPath, blueprintObject, cliParamsArr, pluginBasePath, currentIndex+1)
                    })



                };

            }
            else if (itm.hasOwnProperty('type') && itm.type === 'file') { 

                console.log("itm.hasOwnProperty('type') && itm.type === 'file'");

                let fileData = itm;
                let templateFile;

                let fileName;
                let fileExtension = '';

                if ( fileData.hasOwnProperty('fileExtension') ) {
                    fileExtension = fileData.fileExtension;
                }

                if ( fileData.hasOwnProperty('name') && typeof fileData.name === 'object' && fileData.name.hasOwnProperty('valueMarker') ) {

                    fileName = valueMarkers.find(el => {
                        return el.valueMarkerName === fileData.name.valueMarker
                    }).value;

                }
                else{
                    fileName = fileData.name;
                };

                let templateId = ( fileData.hasOwnProperty('template_id') )? fileData.template_id: false;

                if (templateId != undefined ) {
                    templateFile = self.getFileTemplateByID(pluginBasePath, templateId)
                }
                else {
                    // handle no templateId error
                }

                if (templateFile != undefined) {
                    // handle error
                }





                // let valueMarkers = [];

                if ( fileData.hasOwnProperty('params') && fileData.params.length > 0 ) {

                    // if (cliParamsArr.length == 0 ) {
                    //     // handle missing params error
                    // }
                    // else{
                    //     if (blueprintObject.cliParamsConfig.length == 0) {
                    //         // handle missing params error
                    //         // return 
                    //     }

                    //     // bluprintObject.cliParamsConfig.forEach(function(itm, idx){

                    //     // })

                    //     // console.log(cliParamsArr)
                    //     cliParamsArr.forEach(function(cliParamItm, cliParamIdx){

                    //         let paramConfig = blueprintObject.cliParamsConfig.filter(function(el) {
                    //             let position = cliParamIdx + 1;
                    //             return el.entryPosition === position;
                    //         })[0];
                            
                    //         paramConfig.valueMarker.forEach(function(paramConfigItm, paramConfigIdx){
                    //             let valuetoAdd = (paramConfig.hasOwnProperty('commandPrefix') && paramConfig.commandPrefix.length > 0)? 
                    //             cliParamItm.replace( paramConfig.commandPrefix + "=" , "" ) : cliParamItm;

                    //             let toAdd = {
                    //                 valueMarkerName : paramConfigItm, 
                    //                 value: valuetoAdd
                    //             }
                    //             valueMarkers.push(toAdd)
                    //         })

                    //     });

                    //     // validate needed params for this template are somehow provided
                    //         // handle missing params error
                        
                    // }
                    
                    fileData.params.forEach(function(paramItm, paramIdx){
                        
                        let placeholder = paramItm.placeholder;

                        let value = valueMarkers.find(el => {
                            return el.valueMarkerName === paramItm.valueMarker
                        }).value;

                        // console.log()
                        // console.log()
                        // console.log("-------------------")
                        // console.log(placeholder)
                        // console.log(value)
                        // console.log("-------------------")
                        // console.log()
                        // console.log()

                        // {   
                        //     "placeholder" : "{className}", 
                        //     "valueMarker" : "ACCESS_POINT_CLASS_NAME" 
                        // }

                        // templateFile.replace(placeholder, value);                        
                        templateFile = templateFile.replace(new RegExp(placeholder, 'g'), value );

                    })

                    let fileContent = templateFile;

                    // console.log(fileContent)

                    // save file content from customiced file template in a variable 
                        // customice template by replacing placeholder with the valueMarkers

                    let filePath = currentDirPath + "/" + fileName + fileExtension;


                    console.log()
                    console.log()
                    console.log("final filePath")
                    console.log(filePath)
                    console.log("final filePath")
                    console.log()
                    console.log()

                    // actually create the file in the desired filePath 
                    self.createFile(filePath, fileContent, {});
                }

                // valueMarkers
                
                // TODO // this.customiceFileTemplate
                    // TODO // this.setFileParameters if any

                // TODO // this.createFileContentFromFileTemplate

                // TODO// this.createFile(filePath, fileContent, config);


            } 

        };

        this.createFileSystemFromBluePrint = function(
                // bluprintObject,
                // cliParamsArr, 
                // cliParams
                pluginBasePath,
                blueprintObject, 
                cliParamsArr
            ){


            let self = this;

            let elements = blueprintObject.elements || []; 
            if (elements.length == 0 ){
                return console.log('no actions to perform for this plugin template. check the plugin template structure. "elements" should be added there')
            }


            blueprintObject["cliParams"] = ( blueprintObject.hasOwnProperty('cliParams') )? blueprintObject.cliParams : [];


            // console.log(blueprintObject)
            // console.log('-- -- -- -- -- commandParametersArray')
            // console.log('-- -- -- -- -- ')
            // console.log('')
            // console.log(cliParamsArr)
            // console.log('')
            // console.log('-- -- -- -- -- ')
            // console.log('-- -- -- -- -- commandParametersArray')

            // console.log(parametersValues)
            let currentDirPath = ( blueprintObject.hasOwnProperty('rootDir') )? blueprintObject.rootDir : '';
            
            // console.log('currentDirPath ---')
            // console.log(currentDirPath)
            // console.log('')

            // return
            // console.log('-- -- -- -- -- ')
            // console.log(pluginBasePath)
            // console.log('-- -- -- -- -- ')

            elements.forEach(function(itm, idx){
                self.createFileSystemElements(itm, currentDirPath, blueprintObject, cliParamsArr, pluginBasePath, 0)
            })
                    
        }



    }



}

module.exports = new Helper();

