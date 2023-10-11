const mergeSort = (nums) =>{
    if (nums.length<2) return nums
    const length = nums.length 
    const mid = Math.floor(length/2)
    const left = nums.slice(0,mid)
    const right = nums.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft,sortedRight)
}
const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

const array = Array.from({length:10000},()=>Math.floor(Math.random()*100000));
console.time("merge sort")  
console.log(mergeSort(array)); 
console.timeEnd("merge sort")
