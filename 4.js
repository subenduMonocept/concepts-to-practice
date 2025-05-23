// write a fn. that counts no of ways u can
// partition n objects using parts upto m
// (assuming m>=0)

// dividing n into smaller parts and max value of each part can be m

// [0,0] - 1 way - include no parts is 1 partition
// [0,1] - 1 way
// [0,2] - 1 way
// if n = 0 -> no of ways will be 1

// ------

// [1,0] -> 0 ways
// [2,0] -> 0 ways
// if m = 0 -> no of ways will be 0

// ------

// [1,1] - 1 way
// [1,0]

// [2,1] - 1 way
// [1,1]

// [3,1] - 2 ways
// [2,1] [1,1,1]

// [4,1] - 3 ways
// [3,1] [2,1,1] [1,1,1]

// [5,1] - 4 ways
// [4,1] [3,1,1] [2,1,1,1] [1,1,1,1,1]

// ------

// [2,2] - 2 ways
// [2,0] [1,1]

// [3,2] - 2 ways
// [2,1] [1,1,1]

// [4,2] - 4 ways
// [3,1] [2,2] [2,1,1] [1,1,1,1]

// ------

// (6,4) - 9 ways
// [4,2] [4,1,1] [3,3] [3,2,1] [3,1,1,1] [2,2,2] [2,2,1,1] [2,1,1,1,1] [1,1,1,1,1,1]

// [5,5] - 7 ways
// [5,0] [4,1] [3,2] [3,1,1] [2,2,1] [2,1,1,1] [1,1,1,1,1]

// [3,3] - 3 ways
// [3,0] [2,1] [1,1,1]

function waysToDivideN(n, m) {
  if (n === 0) return 1;
  if (m === 0 || n < 0) return 0;
  else return waysToDivideN(n - m, m) + waysToDivideN(n, m - 1);
}

console.log(waysToDivideN(6, 4));
console.log(waysToDivideN(3, 3));
console.log(waysToDivideN(5, 3));
