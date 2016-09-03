function isPrime (n) {
  if (!Number.isInteger(n)){
    return false
  } else {
    for (var i = 2; i <= Math.ceil(Math.sqrt(n)); i += 1) {
      if (n % i === 0 && n !== 2) {
        return false
      }
    }
  return n > 1
  }
}

function allPrimes (n) {
  let primesArr = []
  let prime
  for (var i = 0; i <= n; i +=1) {
    prime = isPrime(i)
    if (prime) {
      primesArr.push(i)
    }
  }
  return primesArr
}

console.log(allPrimes(100));
