class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    let firstLetterCapitalized = string[0].toUpperCase() + string.slice(1)
    let arr = [];
    let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arr = firstLetterCapitalized.split(' ');
    return arr.map(word =>
      {
        return exludeWords.includes(word) ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

    }).join(' ');
  }
}