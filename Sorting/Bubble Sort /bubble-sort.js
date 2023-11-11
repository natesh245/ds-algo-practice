function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

testArr = [1, 6, 7, 3, 2, 5, 7, 9, 44, 11, 55, 88, 3, 6];

result = bubbleSort(testArr);
console.log(result);
