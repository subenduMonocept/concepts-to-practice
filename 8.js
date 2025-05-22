// swap the 2 numbers without using 3rd variable

let a = 10,
  b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

function swap(x, y) {
  return [y, x];
}

[a, b] = swap(a, b);

console.log(a, b);
