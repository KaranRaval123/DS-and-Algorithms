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
const merge = (left:number[], right:number[]) => {
    let result:number[] = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift() as number);
        } else {
            result.push(right.shift() as number);
        }
    }
    return result.concat(left, right);
}

const array = Array.from({length:50000},()=>Math.floor(Math.random()*100000));
console.time("merge sort")  
console.log(mergeSort(array)); 
console.timeEnd("merge sort")