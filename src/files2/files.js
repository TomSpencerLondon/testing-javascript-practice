var fs = require('fs-promise');

module.exports = function(filename) {
  var onSuccess = function(data) {
    return Promise.resolve(data.toString().split('\n').length);
  }

  var onError = function(err) {
    return Promise.reject(new Error('unable to open file ' + filename));
  };

  return fs.readFile(filename)
    .then(onSuccess)
    .catch(onError);
}
