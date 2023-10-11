# Use mergesort when you dont care about space complexity and data is very large
# time complexity O(n log(n)) space complexity O(n)
import random
import time

def mergeSort(nums):
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left = mergeSort(nums[:mid])
    right = mergeSort(nums[mid:])
    return merge(left, right)

def merge(left, right):
    results = []
    while len(left) and len(right):
        if left[0] < right[0]:
            results.append(left.pop(0))
        else:
            results.append(right.pop(0))
    results+=left + right
    return results

random_array = [random.randint(0, 99999) for _ in range(50000)]
start = time.time()
print(mergeSort(random_array))
end = time.time() - start
print(end)

