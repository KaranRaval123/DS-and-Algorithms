import time
import random
def quickSort(nums):
    if len(nums) <= 1:
        return nums
    pivot = nums[len(nums) - 1]
    left = []
    right = []
    for i in range(len(nums)-1):
        if nums[i] > pivot:
            right.append(nums[i])
        else:
            left.append(nums[i])
    return quickSort(left) + [pivot] + quickSort(right)

random_array = [random.randint(0, 100000) for _ in range(10000)]
start = time.time()
print(quickSort(random_array))
end = time.time() - start
print(end)

