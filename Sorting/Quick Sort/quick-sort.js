function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = sortPivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

function sortPivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  };
  let pivot = arr[start];
  let pivotIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
}

testArr = [16, 11, 44, 55, 88, 6];

result = quickSort(testArr);
console.log(result);
