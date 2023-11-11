function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(arr, i, min);
  }

  return arr;
}

function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

testArr = [3, 2, 5, 7, 9, 44, 11, 55, 88, 3, 6];

result = selectionSort(testArr);
console.log(result);
