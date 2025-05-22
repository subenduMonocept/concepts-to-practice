// sort array
const arrayToBeSorted = [-1, 99, 3, -88, 70, 888, -777];

Array.prototype.mergeSort = function (...args) {
  console.log("Arguments:", args);

  // step 1 - divide
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    console.log(left);
    console.log(right);
  };

  return mergeSort([...this]);
  // if no return is added, it will by default return undefined
};

console.log(arrayToBeSorted.mergeSort("asc"));
