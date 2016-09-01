// function num() {
//   var counter = 10
//   while (counter > 0) {
//     console.log(counter -= 1)
//   }
// }
//
// num()

var countdown = (value) => {
  if (value > 0) {
    process.stdout.write(value.toString() + ", ");
    return countdown(value - 1)
  } else {
    return value
  }
}

countdown(10)
