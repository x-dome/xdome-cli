"use strict";

const winston       = require("winston");

const logger        = winston.loggers.add("xDomeLogger", {
    level           : "info",
    format          : winston.format.combine(
        winston.format.label({
            label   : "xdome",
            message : true,
        }),
        winston.format.colorize({
            all     : true,
        }),
        winston.format.align()
    ),
    transports      : [
        new winston.transports.Console({
            format  : winston.format.simple(),
        }),
    ],
});

module.exports      = logger;
