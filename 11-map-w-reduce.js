module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((result, item, index) => {
    result.push(fn.call(thisArg, item, index, arr));
    return result;
  }, []);
};
