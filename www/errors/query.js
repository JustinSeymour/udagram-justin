"use strict";
/*
 * Udacity Cloud Developer Nanodegree
 * Project 2: Udagram
 * Author: Justin Seymour
 * 04 April 2020
 */
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class QueryError extends base_1.Base {
    constructor(key, msg) {
        super('query', msg, key);
    }
    ;
}
exports.QueryError = QueryError;
;
//# sourceMappingURL=query.js.map