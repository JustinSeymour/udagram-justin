/* 
 * Udacity Cloud Developer Nanodegree
 * Project 2: Udagram
 * Author: Justin Seymour
 * 04 April 2020
 */ 

import { Base } from './base';

export class QueryError extends Base {

   constructor(key:string, msg:string) {
      super('query', msg, key);
   };

};