/* eslint-disable strict, no-unused-vars, no-undef */
let template = `
"use strict";
const commonAccessPoint     = require("xdome-extension-rest").support.accessPoint;
class {className} extends commonAccessPoint{
    constructor(router){
        super();
        this.basePath       = {route};
        this.router         = router;
        this.allowedVerbs   = {verbs};
        this.businessLogic  = require("./businessLogic");
    }
}
module.exports = {className};
`;
/* eslint-enable strict, no-unused-vars, no-undef */

module.exports = template;

