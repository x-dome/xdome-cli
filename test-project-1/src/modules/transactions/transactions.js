
"use strict";
const commonAccessPoint     = require("xdome-extension-rest").support.accessPoint;
class Transactions extends commonAccessPoint{
    constructor(router){
        super();
        this.basePath       = transactions;
        this.router         = router;
        this.allowedVerbs   = ["GET","POST","PUT","DELETE"];
        this.businessLogic  = require("./businessLogic");
    }
}
module.exports = Transactions;
