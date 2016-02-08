function countWords(inputWords) {
  return inputWords.reduce((counts, item) => {
    if (counts.hasOwnProperty(item)) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
    return counts;
  }, {});
}

module.exports = countWords;
