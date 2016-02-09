function Spy(target, method) {
  var proxy = target[method];
  var results = {
    count: 0
  };

  target[method] = function() {
    results.count += 1;
    return proxy.apply(this, arguments);
  };

  return results;
}

module.exports = Spy;
