var add = function (a, b) {
  return a + b
}

var sub = function (a, b) {
  return a - b
}

var mul = function (a, b) {
  return a * b
}

var liftf = function (binary) {
  return function (first) {
    return function (second) {
      return binary (first, second)
    }
  }
}

var curry = function curry (binary, first) {
  return liftf (binary)(first)
}

function inc (number){
  return liftf(add)(5)
}

function twice (binary) {
  return function (a) {
    return binary (a, a)
  }
}

console.log(twice(add)(5));
console.log(twice(mul)(5));
console.log(twice(sub)(5));
