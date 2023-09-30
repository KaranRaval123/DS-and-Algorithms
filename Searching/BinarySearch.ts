let low = 0;
const a: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45
];
let high = a.length - 1;
// const binarySearch = (arr:number[], target:number, low:number, high:number):number => {
//     while (low <= high) {
//         let mid = Math.floor((low+(high-low) / 2));
//         if (arr[mid]===target){
//             return mid;
//         }
//         if (target<arr[mid]){
//             high = mid-1;
//         }
//         else{
//             low = mid+1
//         }
//     }
//     return -1;
// }

const binarySearch = (
  arr: number[],
  target: number,
  low: number,
  high: number
): number => {
  let mid: number = Math.floor(low + (high - low) / 2);
  if (low <= mid) {
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      return binarySearch(arr, target, low, mid - 1);
    }
    if (target > arr[mid]) {
      return binarySearch(arr, target, mid + 1, high);
    }
  }
  return -1;
};
console.log(binarySearch(a, 17, low, high));
