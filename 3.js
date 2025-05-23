// Recursion
// It's is a programming technique where a function
// calls itself in order to solve a problem.
// The key idea is to break down a large problem into smaller
// subproblems of the same type.

// A recursive function has:
// Base case – the condition under which the function stops calling itself.
// Recursive case – the part where the function calls itself.

// Hack
// 1. What's the simplest possible input?
// 2. Play around with ex's and visualize
// 3. Relate hard cases to smaller case - if we know how to solve for smaller
//    case then we just need to add one extra step to add for its successor
// 4. Generalize the pattern
// 5. Write code by recursive pattern with the base case

// write a fn which takes input n
// we have to find sum of all non negative integers n

// using 1
// think of smallest case
// n = 0
// sum(0) = 0
// using 2
// n = 1 -> 1
// n = 2 -> 1 + 2 -> 3
// n = 3 -> 1 + 2 + 3 -> 6
// n = 4 -> 1 + 2 + 3 + 4 -> 10
// using 3

function sumRecur(n) {
  if (n < 0)
    return "This is fn to implement sum of non-negative numbers. Please try with positive n";
  if (n === 0) return 0;
  // using 4 & 5
  // sum(n) = n + sum(n-1)
  return n + sumRecur(n - 1);
}

console.log(sumRecur(4));
console.log(sumRecur(-9));

// write a fn which takes 2 input n and m
// and outputs the no of unique paths
// from the top left corner to bottom right corner
// of a n*m grid
// Constraints: You can move down/right one at a time

// it's the path we will count - not block

// grid(2,4)
// *
// ****

// **
// ***

// ***
// **

// ****
// *

// grid(3,3)
// *
// *
// ***

// *
// **
//  **

// *
// ***
//   *

// **
//  *
//  **

// **
//  **
//   *

// ***
//   *
//   *

// using 1
// grid(1,1) -> 1 path
// grid(2,1) -> 1 path
// grid(1,2) -> 1 path
// grid(1,m) -> 1 path
// grid(n,1) -> 1 path
// grid(2,2) -> 2 paths
// grid(3,2) -> 3 paths
// grid(2,3) -> 3 paths
// grid(2,4) -> 4 paths
// grid(3,3) -> 6 paths -> (3,2) + (2,3)
// now think , what to do with input to get the result
// grid(3,4) -> 10 paths -> (3,3) + (2,4)
// (n,m-1) + (n-1,m)

function gridPaths(x, y) {
  if (x === 1 || y === 1) return 1;
  else return gridPaths(x, y - 1) + gridPaths(x - 1, y);
}

console.log(gridPaths(2, 4));
console.log(gridPaths(3, 3));
