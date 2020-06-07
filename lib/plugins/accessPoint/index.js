"use strict";

const HELPER = require('../../../helper/helper');
const fs = require("fs");

let template = require('./templates/accessPoint');

class accessPoint{

    constructor(){
        this.destinationFolderName = '/src/modules';
    }

    createNewAccessPoint(){
        const self = this;
        const dirPath = self.accessPointName;

        const customiceTemplate = () => {
            const self = this;
            // let template = require('./../../../add/modules/accessPoint/templates/accessPoint');
            // verbs
            let verbsValueRef = self.parameters[0].value;
            let verbsValue = [];
            if( verbsValueRef.includes("get") || verbsValueRef.includes("GET") ){
                verbsValue.push("GET")
            }
            if( verbsValueRef.includes("post") || verbsValueRef.includes("POST") ){
                verbsValue.push("POST")
            }
            if( verbsValueRef.includes("put") || verbsValueRef.includes("PUT") ){
                verbsValue.push("PUT")
            }
            if( verbsValueRef.includes("delete") || verbsValueRef.includes("DELETE") ){
                verbsValue.push("DELETE")
            }
            if (verbsValue.length == 0){
                verbsValue.push("GET")
            }
            verbsValue = JSON.stringify(verbsValue);
            template = template.replace(new RegExp(self.parameters[0].placeholder, 'g'), verbsValue);
            // route
            let routeValue = self.parameters[1].value;
            template = template.replace(new RegExp(self.parameters[1].placeholder, 'g'), routeValue);
            // className
            let classNameValue = HELPER.convertFirstCharactertoUppercaseRestLowercase(self.parameters[2].value);
            template = template.replace(new RegExp(self.parameters[2].placeholder, 'g'), classNameValue );
            // console.log(template)
            return template;
        }

        const createDirWithCustomizedTemplateFileInside = () => {
            const fullPath = process.cwd() + self.destinationFolderName + '/' + dirPath;
            HELPER.printSpacedMessage('creating new module in '+ self.destinationFolderName + '/' + dirPath + ' ...')
            fs.mkdir(fullPath, {recursive:true}, function(error){
                if (error) {
                    // eslint-disable-next-line
                    console.log('an error ocurre while trying to create the access point folder')
                }
                else {
                    const content = customiceTemplate();
                    HELPER.createFile( "." + self.destinationFolderName + '/' + dirPath + '/' + dirPath + ".js", 
                                content);
                }
            });
        };

        createDirWithCustomizedTemplateFileInside();
    }

    init(...args){
        let self = this; 
        this.accessPointName = (args[0]!=undefined)?args[0]:undefined;
        this.parameters = [
            { command: "--verbs", placeholder : "{verbs}", value : "" }, 
            { command: "--route", placeholder : "{route}", value : "" }, 
            { command: false, placeholder : "{className}", value : this.accessPointName }, 
        ];

        // validate you are in an nodejs project root directory (there's a package.json)
        if (!HELPER.isCurrentDirectoryRootFolder().success){
            return HELPER.printSpacedMessage("please navigate to your project's root directory");
        }
        // validate if destination folder exists
        if (!HELPER.destinationFolderExists(this.destinationFolderName).success){
            return HELPER.printSpacedMessage('destination folder ' + this.destinationFolderName + ' not found.')
        }
        // validate folder to create has a valid naming
        if(!HELPER.newDirectoryNameIsValid(this.accessPointName).sucess){
            return HELPER.printSpacedMessage(HELPER.newDirectoryNameIsValid(this.accessPointName).message)
        }
        // validate that there is not a folder with the same name that the one that will be created
        if(HELPER.destinationFolderExists(this.destinationFolderName + '/' +  this.accessPointName).success){
            return HELPER.printSpacedMessage("there is a '" + this.accessPointName + "' folder already created in '" + this.destinationFolderName + "'.")
        }


        // validate that accessPoint's parameters are ok
        let verbs = (args[0]!=undefined)?args[0]:undefined;
        if(args[1]==undefined || args[2]==undefined){
            return HELPER.printSpacedMessage("please make sure you entered the correct parameters. example: --verbs=[GET, POST, PUT] --route=exampleroute")
        }
        else{
            args.forEach(function(itm, idx){
                //verbs
                if ( args[idx].includes( self.parameters[0].command+"=" ) ) {
                    console.log(self.parameters[0].command+"=")
                    console.log(args[idx])
                    self.parameters[0].value = args[idx].replace("--verbs=", "");
                }
                //route
                if ( args[idx].includes( self.parameters[1].command+"=" ) ) {
                    console.log(self.parameters[1].command+"=")
                    console.log(args[idx])
                    self.parameters[1].value = args[idx].replace("--route=", "");
                }
            })
        }
        return this.createNewAccessPoint()



    }

}

module.exports = new accessPoint();
