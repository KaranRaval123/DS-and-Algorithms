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
def binarySearch(nums,target,low,high):
    mid = low + (high-low) // 2
    if low <= high:
        if target == nums[mid]:
            return mid
        elif target < nums[mid]:
            return binarySearch(nums,target,low,mid-1)
        elif target > nums[mid]:
            return binarySearch(nums,target,mid+1,high)
    return -1
arr = [2, 3, 4, 10, 40]
print(binarySearch(arr, 40,0,len(arr)))
