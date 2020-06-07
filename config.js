/** @module config */

"use strict";

const config = {
    
    commands : {
        list : [ 'create', 'add', 'version', 'help', 'info', 'log', 'update', ]
    },
    plugins : {
        accesspoint: require('./lib/plugins/accessPoint/index'),
        dbinterface: require('./lib/plugins/dbInterface/index'),
        tokencheck: require('./lib/plugins/tokenCheck/index'),
        vpnconn: require('./lib/plugins/vpnConn/index'),
    }

 };

module.exports = config;
