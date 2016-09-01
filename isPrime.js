var isPrime = function(num){
  var limit = Math.ceil(Math.sqrt(num))
  for (var i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}


var number = new Array(12348)
var primeArray = []
for(var i = 3; i < number.length; i += 1) {
  if (isPrime(i)) {
    primeArray.push(i)
  }
}
console.log(primeArray);
