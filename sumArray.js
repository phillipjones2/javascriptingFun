function sumArray(array) {
  if (array.length < 2) {
     return 0
  } else {
    var high = array.indexOf(Math.max.apply(null, array))
    var low = array.indexOf(Math.min.apply(null, array))
    array.slice(high,1)
    array.slice(low,1)
    return array.reduce((prev, curr) => prev + curr )
  }
}

console.log(sumArray([1,2,3,4,5,6,7]));
