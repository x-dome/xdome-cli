
"use strict";

class Messages{
    constructor(){
    }

    onProjectCreated(name, projectName){
        console.log()
        console.log('Tu proyecto', name, 'fue creado con éxito!')
        console.log()
        console.log('Para iniciar tu aplicación, ejecuta:')
        console.log()
        console.log('cd ', projectName)
        console.log()
        console.log('npm install')
        console.log()
        console.log('node .')
        console.log()
    }

    onRESTModuleCreated(accessPointName, accessPointVerbsArray, xdomeInfo, accessPointNameRoute){
        console.log()
        console.log('Tu módulo REST', accessPointName, 'fue instalado. Probalo !')
        console.log()
        console.log('Paso 1. Ejecuta: node .')
        console.log()
        console.log('Paso 2. Ejecuta alguna petición CURL:')
        console.log()
        accessPointVerbsArray.forEach(function(itm, idx){
          console.log('curl --request', itm ,'http://localhost:3000'+ xdomeInfo.basePath + accessPointNameRoute)
        })
        console.log('')
    }

    swaggerJsonPathDoesNotExist(){
        console.log()
        console.log('La ruta ingresada por el parámetro --swaggerJson no existe')
        console.log()
    }
    
}

module.exports = Messages;
