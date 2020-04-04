
/* 
 * Udacity Cloud Developer Nanodegree
 * Project 2: Udagram
 * Author: Justin Seymour
 * 04 April 2020
 * 
 * Base class for error models
 */ 



// Create the class to export 
export class Base {

   error: {
      type: string,
      timestamp: number,
      message: string,
      key: string
   };

   constructor(type: string, msg: string, key: string) {
      this.error = {
         type: type,
         timestamp: Date.now(),
         message: msg,
         key: key
      };
   };

};