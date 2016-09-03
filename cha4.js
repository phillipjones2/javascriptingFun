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

var doubl = twice(add);
var square = twice(mul);

function reverse (binary) {
  return function (a, b) {
    return binary (b, a)
  }
}

function composeu (f1, f2) {
  return function (a) {
    return f2(f1(a))
  }
}

function composeb (b1, b2){
  return function (a, b, c) {
    return b2(b1(a,b), c)
  }
}

function limit (binary, count) {
  return function (a, b){
    if (count >= 1) {
      count -= 1;
      return binary (a, b)
    }
    return undefined
  }
}

var add_limited = limit(add, 1)

function from (start){
  return function () {
    var oldnum = start
    start += 1
    return oldnum
  }
}

var index = from (0)

function to (gen, end) {
  return function () {
    var value = gen()
    if (value < end) {
      return value
    }
    return undefined
  }
}

var index = to(from(0), 3)

function fromTo (start, end) {
  return  to (from(start), end)
}

var index = fromTo(0, 3)

function element (arr, gen) {
  if (gen === undefined) {
    gen = fromTo(0, arr.length)
  }
  return function () {
    var index = gen();
    if (index !== undefined) {
      return arr[index]
    }
  }
}

var ele = element(['a', 'b', 'c', 'd'])

console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
