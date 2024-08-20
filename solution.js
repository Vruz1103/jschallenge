// First Problem Solution
const K = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let max_index = i;
    let tmp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
};

console.log(K([1, 2, 6, 4, 5], 3));
console.log(K([-10, -25, -47, -36, 0], 1));

//Second Problem Solution
const swap = (arr) => {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));

//Third Problem Solution
