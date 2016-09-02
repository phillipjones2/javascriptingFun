var add = function (a) {
  return function (b) {
    return a + b
  }
}

var sub = function (a) {
  return function (b) {
    return a - b
  }
}

var mul = function (a) {
  return function (b) {
    return a * b
  }
}

// console.log(add(1,2)===3);
// console.log(sub(2,2)===0);
// console.log(mul(1,2)===2);
// console.log(add(2,2)===4);
// console.log(sub(4,2)===2);
// console.log(mul(4,2)===8);

function liftf (x) {
  return x
}

console.log(liftf(add)(1)(2)===3);
console.log(liftf(sub)(3)(2)===1);
console.log(liftf(mul)(1)(2)===2);
