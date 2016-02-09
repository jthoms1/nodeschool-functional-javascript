'use strict';

function logger(prepend) {
  return function(text) {
    var args = Array.prototype.slice.call(arguments);
    console.log.apply(null, [prepend].concat(args));
  };
}

module.exports = logger;
