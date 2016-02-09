'use strict';

function duckCount() {
  return Array.prototype.filter.call(arguments, item => {
    return Object.prototype.hasOwnProperty.call(item, 'quack');
  }).length;
}

module.exports = duckCount;
