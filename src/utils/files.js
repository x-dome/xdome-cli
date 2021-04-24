"use strict";

const fs            = require('fs-extra');

const endpointExist = function(endPointName){
    return fs.existsSync(endPointName);
}

module.exports = {
    endpointExist,
};
