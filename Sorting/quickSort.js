const quickSort = (nums) => {
  if (nums.length <= 1) return nums;
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] <= pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const array = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100000)
);
console.time("quick sort");
console.log(quickSort(array));
console.timeEnd("quick sort");
