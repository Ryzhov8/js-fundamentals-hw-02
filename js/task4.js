let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5].sort((a, b) => a - b);

let result;
let maxCount = 0;
let currentCount = 0;
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] === arr[i - 1]) {
    currentCount += 1;
  } else {
    currentCount = 1;
  }
  if (currentCount > maxCount) {
    maxCount = currentCount;
    result = arr[i];
  }
}
arr = arr.filter((el) => el !== result);
console.log(arr);
