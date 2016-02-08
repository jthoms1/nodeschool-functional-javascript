'use strict';

function reduce(array, callback, initialValue) {
  let currentIndex = 0;

  function callIt(value, index) {
    if (!array[index]) {
      return value;
    }
    let response = callback(value, array[index], index, array);
    return callIt(response, index + 1);
  }

  return callIt(initialValue, 0);
}

module.exports = reduce;
