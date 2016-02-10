'use strict';

function curryN(fn, n) {
  n = n || fn.length;

  return function(value) {
    if (n > 1) {
      return curryN(fn.bind(this, value), n - 1);
    }
    return fn(value);
  };
}

module.exports = curryN;
