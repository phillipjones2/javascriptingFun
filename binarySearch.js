// function BinarySearch(array, searchNum){
//   let start = 0;
//   let end = array.length - 1
//   let currentIndex
//   let currentElement
//   while (start <= end) {
//     currentIndex = (start+end/2) | 0
//     currentElement = array[currentIndex]
//
//     if (currentElement < searchNum) {
//       start = currentIndex + 1
//     } else if (currentElement > searchNum) {
//       end = currentIndex - 1
//     } else {
//       return currentIndex
//     }
//   }
//   return -1
// }

function BinarySearch(array, searchElement) {

    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

console.log(BinarySearch([1,2,3,4,5,6,7,8,9],9));
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],8));
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],7));
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],6));
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],5));
console.log(BinarySearch([10,20],10));
console.log(BinarySearch([3],3));
console.log(BinarySearch([1,2,3,4,5,6,7,9],8));
