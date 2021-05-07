"use strict";

const logger        = require('winston').loggers.get("xDomeLogger");

class Messages{
    constructor(){
    }

    onProjectCreated(name, projectName){
        logger.info()
        logger.info(`Tu proyecto ${name} fue creado con éxito!`)
        logger.info()
        logger.info('Para iniciar tu aplicación, ejecuta:')
        logger.info()
        logger.info(`cd ${projectName}`)
        logger.info()
        logger.info('npm install')
        logger.info()
        logger.info('node .')
        logger.info()
    }

    onRESTModuleCreated(accessPointName, accessPointVerbsArray, xdomeInfo, accessPointNameRoute){
        logger.info()
        logger.info(`Tu módulo REST ${accessPointName} fue instalado. Probalo !`)
        logger.info()
        logger.info('Paso 1. Ejecuta: node .')
        logger.info()
        logger.info('Paso 2. Ejecuta alguna petición CURL:')
        logger.info()
        accessPointVerbsArray.forEach(function(itm/*, idx*/){
            logger.info(`curl --request ${itm} http://localhost:3000${xdomeInfo.basePath}${accessPointNameRoute}`)
        })
        logger.info('')
    }

    swaggerJsonPathDoesNotExist(){
        logger.info()
        logger.info('La ruta ingresada por el parámetro --swaggerJson no existe')
        logger.info()
    }
}

module.exports = Messages;
