"use strict";

const BaseModule = require('./../../../BaseModule');
const fs = require("fs");

class accessPoint extends BaseModule{

    constructor(){
        super();
        this.destinationFolderName = '/src/modules';
    }

    createNewAccessPoint(){

        // TODO: CREATE ALL CONTENT IN TEMPLATE FOLDER
        // TODO: REPLACE VARIABLES IN FILES, IN MEMORIA AND ...
        // TODO: COPY TO DESTINATION

        const dirPath = this.accessPointName;
        const createDir = () => {
            const fullPath = process.cwd() + this.destinationFolderName + '/' + dirPath;
            super.printSpacedMessage('creating new module in '+ this.destinationFolderName + '/' + dirPath + ' ...')
            fs.mkdir(fullPath, {recursive:true}, function(error){
                if (error) {
                    // console.error(error)
                    // eslint-disable-next-line
                    console.log('an error ocurre while trying to create the access point folder')
                }
                else {
                    // console.log('dir was made')
                }
            });
        };
        // const createFile = (filePath, fileContent) => {
        //     // TODO: CREATE A FILE FROM A TEMPLATE
        //     fs.writeFile( filePath, fileContent, (error) => {
        //         if (error) {
        //             console.error(error)
        //         }
        //         else {
        //             console.log('file was made')
        //         }
        //     });
        // };
        createDir();
    }

    init(...args){
        this.accessPointName = (args[0]!=undefined)?args[0]:undefined;

        // validate you are in an nodejs project root directory (there's a package.json)
        if (!super.isCurrentDirectoryRootFolder().success){
            return super.printSpacedMessage("please navigate to your project's root directory");
        }

        // validate if destination folder exists
        if (!super.destinationFolderExists(this.destinationFolderName).success){
            return super.printSpacedMessage('destination folder ' + this.destinationFolderName + ' not found.')
        }

        // validate folder to create has a valid naming
        if(!super.newDirectoryNameIsValid(this.accessPointName).sucess){
            return super.printSpacedMessage(super.newDirectoryNameIsValid(this.accessPointName).message)
        }

        // validate that there is not a folder with the same name that the one that will be created
        if(super.destinationFolderExists(this.destinationFolderName + '/' +  this.accessPointName).success){
            return super.printSpacedMessage("there is a '" + this.accessPointName + "' folder already created in '" + this.destinationFolderName + "'.")
        }

        return this.createNewAccessPoint()

    }

}

module.exports = new accessPoint();
