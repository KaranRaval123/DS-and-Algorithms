# Time complexity : O(n^2) Space complexity : O(1)
# Used for small inputs
# When only few elements are in array and some are sorted use insertion sort
def insertionSort(arr):
    for i in range(1,len(arr)):
        while i>0 and arr[i - 1] > arr[i]:
            arr[i - 1],arr[i] = arr[i],arr[i - 1]
            i -= 1 
    return arr
print(insertionSort([12,12,1,1,1,1,39,27,24,26,0,26,35,24,46]))
#if prev ele greater than current then traverse backwards and sort untill first 