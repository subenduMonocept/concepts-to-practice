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
  return n + sumRecur(n - 1);
}

console.log(sumRecur(4));
console.log(sumRecur(-9));
