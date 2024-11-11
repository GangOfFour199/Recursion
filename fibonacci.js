// The Fibonacci Sequence => Each subsequent number is the sum of the previous two.

// ITERATIVE SOLUTION

function fibonaccis(n) {
  let pattern = [0, 1]; // declare our array
  for (let i = 2; i <= n; i++) {
    // i set to 2 as we have our first elements in pattern arr
    console.log("This was printed iteratively");
    pattern.push(pattern[i - 2] + pattern[i - 1]); // push into array as next elem in sequence, the result of before previous and previous value
  }
  return pattern.slice(0, n); // give us the array as a result up to the speciifed length
}

console.log(fibonaccis(5)); // [0, 1, 1, 2, 3] 

// RECURSIVE SOLUTION

const fibonacci_series = function (num) {
  console.log("This was printed recursively");
  // Base case: if n is less than or equal to 1, return the base series [0, 1].
  if (num <= 1) {
    return [0, 1];
  } else if (num <= 0) {
    console.log("Please enter a valid positive number of elements!"); // only works with postive integers as position
  } else {
    // Recursive case: generate the Fibonacci series up to (n - 1).
    let sequence = fibonacci_series(num - 1);
    // Calculate the next term in the series and push it to the array.
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    // Return the updated Fibonacci series up to the specified length.
    return sequence.slice(0, num);
  }
};

console.log(fibonacci_series(9)); // [0, 1, 1, 2, 3, 5, 8, 13, 21];
