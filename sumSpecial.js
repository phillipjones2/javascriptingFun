// function sumArray(array) {
//   if ( array === null || array.length < 3) {
//      return 0
//   } else {
//     var high = array.indexOf(Math.max.apply(null, array))
//     console.log("high: " + high);
//     var low = array.indexOf(Math.min.apply(null, array))
//     console.log("low: " + low);
//     console.log(array);
//     array.splice(high,1)
//     console.log(array);
//     array.splice(low,1)
//     console.log(array);
//     var total = 0
//     for ( var i = 0; i < array.length; i += 1){
//       total += i
//     }
//   }
//   return total
// }

function sumArray(array){
  if (array.length > 2) {
    array.sort(sortNumber)
    array = array.slice(1,-1)
    return array.reduce((prev, curr) => {
      return prev + curr
    })
  } else {
    return 0
  }
}

function sortNumber(a,b){
  return a-b
}

console.log(sumArray([5]));
console.log(sumArray([5,6]));
console.log(sumArray([]));
console.log(sumArray([5,6,7,8,8,8,3,2,1,9]));
console.log(sumArray([6,3,8,0,10,54,3,1,1,5,6,3,3]));
console.log(sumArray([-1,-2,-3,-4,-5]));
