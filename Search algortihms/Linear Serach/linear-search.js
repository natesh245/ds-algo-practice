function linearSearch(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

testArr = [1, 5, 8, 9, 11, 45, 6, 7, 12];

result = linearSearch(testArr, 25);
console.log(result);
