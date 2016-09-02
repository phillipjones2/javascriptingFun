function identityf (a) {
  return () => {
    return a
  }
}

console.log(identityf('yes')());

function addf (x) {
  return function (y) {
    return x + y
  }
}

console.log(addf(3)(4));
