// Find the kth greatest element of a given array of integersWrite a JavaScript program to find the kth greatest element of a given array of integers.
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

console.log(K([-10, -25, -47, -36, 0], 1));

//Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
//Second Problem Solution
// const swap = (arr) => {
//   [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
//   return arr;
// };

// console.log(swap([1, 2, 3, 4]));
// console.log(swap([0, 2, 1]));
// console.log(swap([3]));

//Alternate solution
const secondProblem = (x) => {
  if (x.length > 1) {
    let temp = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = temp;
  }
  return ar;
};

console.log(swap([0, 2, 1]));

//Write a JavaScript program to find the number of elements which presents in both of the given arrays.
//Third Problem Solution

const thirdProblem = (x, y) => {
  let ans = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      if (x[i] === y[j]) {
        ans++;
      }
    }
  }
  return ans;
};
console.log(thirdProblem([2, 9, 8, 7], [6, 8, 3, 1]));
