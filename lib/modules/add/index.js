"use strict";

const BaseModule = require('./../BaseModule');
const modules = {
    tokencheck: require('./modules/tokenCheck/index'),
    accesspoint: require('./modules/accessPoint/index'),
    vpnconn: require('./modules/vpnConn/index'),
    dbinterface: require('./modules/dbInterface/index'),
}

class Add extends BaseModule{
    constructor(){
        super()
    }

    init(...args) {
        this.pluginName = (args[0]!=undefined)?args[0].toLowerCase():'';
        let pluginParameters = args.splice(1);

        if(Object.keys(modules).includes(this.pluginName)){
            modules[this.pluginName].init(...pluginParameters)
        }
        else{
            // console.log()
            // console.log('please provide a valid pluginName:')
            // console.log()
            // console.log('xdome add <PUGIN_NAME>')
            // console.log()
            Object.keys(modules).forEach(function(itm/*, idx*/){
                // eslint-disable-next-line no-console
                console.log('- ' + itm);
            })
            // console.log()
        }
    }
}

module.exports = new Add();
