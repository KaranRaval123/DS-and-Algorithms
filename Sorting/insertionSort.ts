const insertionSort = (arr) => {
  let j;
  for (let i = 1; i < arr.length; i++) {
    j = i - 1;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }
  return arr;
};

const a = [12, 12, 1, 1, 1, 1, 39, 27, 24, 26, 0, 26, 35, 24, 46];
console.log(insertionSort(a));
