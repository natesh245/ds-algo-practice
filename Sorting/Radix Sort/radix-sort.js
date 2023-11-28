function radixSort(arr) {
  const maxNum = getMaxNum(arr);

  const noOfDigits = getNoOfDigits(maxNum);

  for (let i = 0; i < noOfDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getNthDigit(arr[j], i);

      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

function getMaxNum(arr) {
  return Math.max(...arr);
}

function getNoOfDigits(num) {
  return String(num).length;
}

function getNthDigit(num, n) {
  const str = String(num);
  const nthStr = str[str.length - 1 - n];
  return Number(nthStr) || 0;
}

testArr = [16, 11, 44, 55, 88, 6, 89];

result = radixSort(testArr);
console.log(result);
