/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
    	console.log('error', err);
    	callback(err, null);
    } else {
    	console.log('success', data.split('\n').splice(0, 1));
    	callback(null, data.split('\n').splice(0, 1).toString());
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, function(err, response, body) {
  	if (err) {
  		return callback(err, null);
  	} else {
  		callback(null, response.statusCode);
  	}
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
