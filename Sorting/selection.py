# Time complexity : O(n^2) Space complexity : O(1)
def selectionSort(arr):
    for i in range(len(arr)-1):
        min_index = i
        for j in range(i+1,len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[min_index],arr[i] = arr[i], arr[min_index]
    return arr
print(selectionSort([92,39,27,84,26,0,26,95,24,56]))
