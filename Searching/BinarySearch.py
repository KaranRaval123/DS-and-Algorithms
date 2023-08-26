# def binarySearch(nums, target):
    # low = 0
    # high = len(nums) - 1
    # while low <= high:
    #     mid = low + (high-low) // 2
    #     if nums[mid]==target:
    #         return mid
    #     elif target < nums[mid]:
    #         high = mid - 1
    #     else:
    #         low =  mid + 1
    # return -1
# arr = [2, 3, 4, 10, 40]
# print(binarySearch(arr, 40))
def binarySearchFor2D(nums,target):
    r = 0
    c = len(nums) - 1
    while r < len(nums) and c >= 0:
        if (nums[r][c] == target):
            return[r,c]
        elif nums[r][c] < target:
            r+=1
        else:
            c-=1
    return [-1,-1]
arr = [
    [10,20,30,40],
    [15,25,35,45],
    [28,29,49,57],
    [33,34,38,50]
]
print(binarySearchFor2D(arr,49))