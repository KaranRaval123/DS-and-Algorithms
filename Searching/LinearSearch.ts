// const linearSearch = (arr: number[], target: number) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1
// };
const linearSearch = (arr: number[], target: number, counter: number) => {
  if (counter < arr.length) {
    if (arr[counter] === target) return counter;
    return linearSearch(arr, target, counter + 1);
  }
  return -1
};
let ar: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45
];
console.log(linearSearch(ar, 17,0));
