function binarySearch(arr, ele) {
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (ele == arr[mid]) return mid;
    else if (ele > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

testArr = [1, 5, 8, 9, 11, 45, 6, 7, 12].sort((a, b) => a - b);
console.log(testArr);
result = binarySearch(testArr, 12);
console.log(result);
