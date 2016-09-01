var getIndex = (function() {
  var names = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']
  return  function (n) {
    return names[n]
  }
}())

console.log(getIndex(0));
console.log(getIndex(1));
console.log(getIndex(2));
console.log(getIndex(3));
console.log(getIndex(4));
console.log(getIndex(5));
console.log(getIndex(6));
console.log(getIndex(7));
console.log(getIndex(8));
console.log(getIndex(9));
console.log(getIndex(10));
console.log(getIndex(11));
