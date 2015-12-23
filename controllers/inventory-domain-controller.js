/*jslint node: true*/
'use strict';
var restify, configManager, dbConfig, loggerConfig, bunyan, dao, utility, domain, d;

restify           = require('restify');
configManager     = require('node-config-manager');
dbConfig          = configManager.getConfig('db');
loggerConfig      = configManager.getConfig('logger');
bunyan            = require('bunyan');
dao               = require('./../services/inventoryDao.js');
utility           = require('./../services/utility.js');
domain			  = require('domain');
d				  = domain.create();

var log         = bunyan.createLogger({
  name          : 'inventory-domain-controller.js',
  level         : loggerConfig.logLevel,
  serializers   : bunyan.stdSerializers
});

function postInventoryEnquiry (req,res,next){

    var data = req.body;

    dao.postInventoryEnquiry(data,res);
}

module.exports.postInventoryEnquiry = postInventoryEnquiry