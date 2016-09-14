function add (a, b) {
  return a + b

}

function sub (a, b) {
  return a - b
}

function mul (a, b) {
  return a * b
}

function identityf (x) {
  return function () {
    return x
  }
}

var five = identityf(5)
var happy = identityf('happy')

function addf (a) {
  return function(b) {
    return a + b
  }
}

function liftf (binary) {
  return function (a) {
    return function (b){
      return binary(a,b)
    }
  }
}

var addf = liftf(add)

function curry1 (binary, a) {
  return function (b) {
    return binary (a, b)
  }
}

function curry (binary, a) {
  return liftf(binary)(a)
}

var inc1 = curry(add, 1)
var inc2 = liftf(add)(1)
var inc3 = addf(1)

function twice (binary) {
  return function (a) {
    return binary(a, a)
  }
}
var doubl = twice(add)
var square = twice(mul)

function reverse (binary) {
  return function (a , b) {
    return binary(b, a)
  }
}

var bus = reverse(sub)

function composeu (func1, func2) {
  return function (a) {
    return square(doubl(a))
  }
}
var doubleSquare = composeu(doubl, square)

function composeb (binary1, binary2) {
  return function (a, b, c) {
    return binary2(c, binary1(a, b))
  }
}

function limit(binary, number) {
    return function (a, b) {
      if (number > 0) {
        number -= 1
        return binary(a, b)
    }
  }
}
var add_ltd = limit(add, 1)

function from (num) {
  return function () {
    now = num
    num += 1
    return now
  }
}


function to (gen, end) {
  return function () {
    var value = gen()
    if ( value < end) {
      return value
    }
  }
}

function fromTo(start, end) {
  return to(from(start), end)
}


var index = fromTo(0, 3)

function element (arr, gen) {
  if(gen === undefined) {
    gen = fromTo(0, arr.length)
  }
  return function () {
    var index = gen()
    if (index !== undefined) {
      return arr[index]
    }
  }
}
var ele = element(['a','s','d','f','g','h'])

function collect (gen, arr) {
  return function () {
    var value = gen()
    if (value !== undefined){
      arr.push(value)
    }
    return value
  }
}

var arr = []
var col = collect(fromTo(0,4), arr)

function third (value) {
  return value % 3 === 0
}

function filter (gen, pred) {
  return () => {
    var value
    do {
      value = gen()
    } while (value !== undefined && !pred(value))
    return value
  }
}

var fil = filter(fromTo(0, 10), third)

function concat (gen1, gen2) {
  return () => {
    var gen = gen1
    var value = gen()
    if(value !== undefined) {
      return value
    }
    gen = gen2
    return gen()
  }
}

var con = concat(fromTo(0, 3), fromTo(0, 2))

function gensymf (sym) {
  var val = 0
  return () => {
    val += 1
    return sym + val
  }
}

var geng = gensymf('g')
var genh = gensymf('h')

function fibonaccif(a, b) {
  var num = 0
  return () => {
    if (num === 0) {
      num += 1
      return  a
    } else if (num === 1) {
      num += 1
      return b
    }
    var total = a + b
    a = b
    b = total
    return total
  }
}

var fib = fibonaccif(0, 1)

function counter(num){
  return {
    up: () => {
      return num += 1
    },
    down: () => {
      return num -= 1
    }
  };
};

var obj = counter(10);
var up = obj.up;
var down = obj.down;

function revocable (bin) {
  return {
    invoke: (a,b) => {
      if (bin !== undefined){
        return bin(a,b)
      }
    },
    revoke: () => {
      bin = undefined
    }
  };
};

var rev = revocable(add);
var add_rev = rev.invoke;

function m (val, source) {
  return {
    value: val,
    source: (typeof source === 'string')
              ? source
              : String(val)
  }
};

function addm (obj1, obj2) {
  return {
    value: obj1.value + obj2.value,
    source: "(" + obj1.source + "+" + obj2.source + ")"
  }

}


console.log(JSON.stringify(addm(m(1), m(Math.PI, "pi"))));
console.log(JSON.stringify(addm(m(4,3), m(1))));
