//Define utility functions here
function handleRequest(req, res, err)
{
	res.end("Error been thrown from " + req.url + " and "+ err);
}

module.exports.handleRequest = handleRequest;