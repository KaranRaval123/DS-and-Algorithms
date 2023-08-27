# Time complexity : O(n^2) Space complexity : O(1)
def bubbleSort(arr):
    for j in range(len(arr)):            
        for i in range(len(arr)-1):
            if arr[i] > arr[i+1]:
                arr[i],arr[i+1] = arr[i+1],arr[i]
    return arr
print(bubbleSort([92,39,27,84,26,0,26,95,24,56]))
