module.exports = function reverse (n) {
  let str = n.toString();
  let reverse = str.split('').reverse().join('');
  return parseInt(reverse, 10);
}
