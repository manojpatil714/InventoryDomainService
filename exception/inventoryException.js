/**
 * Common Exception for Inventory application
 */
var restify = restify = require('restify'),
    util = require('util');

function queryError(error) {
    error.statusCode = 418,
        error.message ='error in executing query'
    return {success: false, data: error.message,status:error.statusCode};
}



function dbconnectionerror(message) {

    var err = new restify.errors.RequestTimeoutError('Unable to connect to database!');
    //log.error("Error occurred in getAll()" + err);RequestTimeoutError
    return {success: false, data: err.message,status:err.statusCode};
}

module.exports.queryError = queryError;
module.exports.connectionerror = dbconnectionerror;