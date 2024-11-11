const myFirstArray = [3, 2, 1, 13, 8, 5, 0, 1];
const mySecondArray = [105, 77, 109, 100];

/* mergeSort is an algorithm that takes in an array, 
breaks down into smaller arrays, 
sorts those smaller arrays
then merges smaller arrays back into new, combined array
*/

/* In psuedocode, steps are:
    1. Find midpoint in array
    2. Divide left hand side of arr
    3. Divide right hand side of arr
    4. Sort
    5. Merge arrays back together into one
*/

const mergeSortRec = (arr) => {
  if (arr.length === 0) return "Please provide a non empty array!";
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2); // find the midpoint
  const left = arr.slice(0, mid); // declare left side of arr
  const right = arr.slice(mid, arr.length); // declare right side of arr

  return merge(mergeSortRec(left), mergeSortRec(right)); // recursively return result of sorting each half and merge together
};

const merge = (leftArr, rightArr) => {
  // func to sort both sides of arr then merge together
  // To merge the both incoming arrays
  const result = []; // new array to handle elems coming in from two halves

  let indexL = 0;
  let indexR = 0;
  // COMPARISON
  while (indexL < leftArr.length && indexR < rightArr.length) {
    if (leftArr[indexL] < rightArr[indexR]) {
      result.push(leftArr[indexL]);
      indexL++;
    } else {
      result.push(rightArr[indexR]);
      indexR++;
    }
  }

  while (indexL < leftArr.length) {
    result.push(leftArr[indexL]);
    indexL++;
  }

  while (indexR < rightArr.length) {
    result.push(rightArr[indexR]);
    indexR++;
  }

  return result;
};

console.log(mergeSortRec([])); // "Please provide a non empty array"
console.log(mergeSortRec([50])); // [50]
console.log(mergeSortRec(myFirstArray)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSortRec(mySecondArray)); // [77, 100, 105, 109]
