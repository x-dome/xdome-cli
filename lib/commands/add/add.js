"use strict";

const HELPER = require('../../../helper/helper');
const PLUGINS = require('../../../config').plugins;

class Add {
        constructor(){
    }

    init(...args) {
        this.pluginName = (args[0]!=undefined)?args[0].toLowerCase():'';
        let pluginParameters = args.splice(1);

        if(Object.keys(PLUGINS).includes(this.pluginName)){
            PLUGINS[this.pluginName].init(...pluginParameters)
        }
        else{
            Object.keys(PLUGINS).forEach(function(itm/*, idx*/){
                // eslint-disable-next-line no-console
                console.log('- ' + itm);
            })
        }
    }
}

module.exports = new Add();
