var controller = require('./../controllers/inventory-domain-controller.js');
var restify = require('restify');

module.exports = function(server){

    server.post('/api/getInventoryEnquiry/post',controller.postInventoryEnquiry);

      };
