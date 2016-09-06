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

function collect (gen, arr){
  return function (){
    var value = gen()
    if (value !== undefined) {
      arr.push(value)
    }
    return value
  }
}

var arr = []
var col = collect(fromTo(0,2), arr)

function filter (gen, predicate) {
  return function () {
    var value
    do { value = gen()
    } while (value !== undefined && !predicate(value))
      return value
  }
}

var fil = filter(fromTo(0, 5), function third(value) {return value % 3 === 0})

function concat (gen1, gen2) {
  var gen = gen1
  return function () {
    var value = gen()
    if (value !== undefined) {
      return value
    }
    gen = gen2
    return gen()
  }
}

var con = concat(fromTo(0,3), fromTo(0,2))

function gensymf (prefix) {
  var number = 0
  return function () {
    number += 1
    return prefix + number
  }
}

var geng = gensymf("G")
var genh = gensymf("H")

function fibonaccif(a, b){
  var i = 0
  return function () {
    var next
    switch (i) {
      case 0:
        i = 1
        return a
      case 1:
        i = 2
        return b
      default:
         next = a + b
         a = b
         b = next
         return next
    }
  }
}

function fibonaccif2(a, b) {
  return function () {
    var next = a;
    a = b
    b += next
    return next

  }
}

var fib = fibonaccif2(0,1)

function counter (value) {
  return {
    up: function () {
      value += 1
      return value
    },
    down: function () {
      value -= 1
      return value
    }
  }
}

var counting = counter(1)

function revocable(binary) {
  var active = true
  return {
    invoke: function (a, b){
      if (active) {
        return binary(a, b)
      }
      return undefined
    },
    revoke: function () {
      active = false
      return "binary has been revoked"
    }
  }
}

var rev = revocable(add)
var add_rev = rev.invoke

function m(value, source) {
  return {
    value: value,
    source: (typeof source === 'string') ? source : String(value)
  }
}

function addm (obj1, obj2) {
  return m(
    obj1.value + obj2.value,
    '(' + obj1.source + ' + ' + obj2.source + ')'
  )
}

console.log(JSON.stringify(addm(m(1), m(2))));
console.log(JSON.stringify(addm(m(1), m(Math.PI, "pi"))));
