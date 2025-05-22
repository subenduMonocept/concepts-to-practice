// Factorial
function factorial(n) {
  if (n < 0) return "Factorial of negative numbers can't be found";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(-5));
console.log(factorial(0));
console.log(factorial(4));
// 4 * 3 * 2 * 1

// Fibonacci series
function fibonacci(count) {
  if (count < 1) return "Can't get fibonacci series of negative number";
  if (count === 1) return 1;

  console.log(object);
}

console.log(fibonacci(5));
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
