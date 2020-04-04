"use strict";
/*
 * Udacity Cloud Developer Nanodegree
 * Project 2: Udagram
 * Author: Justin Seymour
 * 04 April 2020
 *
 * Base class for error models
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Create the class to export 
class Base {
    constructor(type, msg, key) {
        this.error = {
            type: type,
            timestamp: Date.now(),
            message: msg,
            key: key
        };
    }
    ;
}
exports.Base = Base;
;
//# sourceMappingURL=base.js.map