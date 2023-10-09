const selectionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    while (i> 0 && arr[i-1] > arr[i]) {
      [arr[i], arr[i-1]] = [arr[i-1],arr[i]]
      i--
    }
  }
  return arr;
};
const a = [12,12,1,1,1,1,39,27,24,26,0,26,35,24,46];
console.log(selectionSort(a));
