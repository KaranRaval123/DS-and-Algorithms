function algorithmA(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
//an algorithms with O(n^3) is faster than O(n^2) for input size of 10 but it grows significantly larger for large input size
function algorithmB(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] > arr[j] && arr[i] > arr[k]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = arr[k];
          arr[k] = temp;
        }
      }
    }
  }
  return arr;
}

const smallArray = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));

console.time("Algorithm A - Small Input");
algorithmA(smallArray);
console.timeEnd("Algorithm A - Small Input");

console.time("Algorithm B - Small Input");
algorithmB(smallArray);
console.timeEnd("Algorithm B - Small Input");

console.time("Algorithm A - Large Input");
algorithmA(largeArray);
console.timeEnd("Algorithm A - Large Input");

console.time("Algorithm B - Large Input");
algorithmB(largeArray);
console.timeEnd("Algorithm B - Large Input");
