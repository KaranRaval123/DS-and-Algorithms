const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j
      }
    }
    if (min_index!== i) {
      [arr[min_index],arr[i]] = [arr[i],arr[min_index]];
    }
  }
  return arr;
};
const a = [92, 39, 27, 84, 26, 0, 26, 95, 24, 56];
console.log(selectionSort(a));
