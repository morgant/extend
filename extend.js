/*! extend.js | (c) 2017 Chris Ferdinandi & (c) 2018 Morgan Aldridge | MIT License | http://github.com/morgant/extend */
/**
 * Merge two or more objects together into the first object. Same method signature as jQuery.extend().
 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
 * @param {Object}   target   The target object to be merged into & modified
 * @param {Object}   objects  The object(s) to merge into the target object
 * @returns {Object}          Target object with merged values from object(s)
 */
var extend = function () {

    // Variables
    var target;
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    // Get the target object
    if ( ( length - i >= 1 ) && ( Object.prototype.toString.call( arguments[i] ) === '[object Object]' ) ) {
      target = arguments[i];
      i++;
    }

    // Merge the object into the extended object
    var merge = function ( obj ) {
        for ( var prop in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                // If deep merge and property is an object, merge properties
                if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    target[prop] = extend( true, target[prop], obj[prop] );
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
        var obj = arguments[i];
        merge(obj);
    }

    return target;

};
