var add = function (a, b) {
  return a + b
}

var sub = function (a, b) {
  return a - b
}

var mul = function (a, b) {
  return a * b
}

function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary (first, second)
    }
  }
}

console.log(liftf(add)(2)(5));
console.log(liftf(sub)(10)(5));
console.log(liftf(mul)(3)(5));
