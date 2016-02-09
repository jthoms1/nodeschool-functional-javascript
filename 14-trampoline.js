function repeat(operation, num) {
  return () => {
    if (num <= 0) {
      return;
    }
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn.apply(fn.context, fn.args);
  }
  return fn;
}

module.exports = function(operation, num) {
  return trampoline(() => {
    repeat(operation, num);
  });
};
