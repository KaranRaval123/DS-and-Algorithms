# def linearSearch(arr, N, target):
#     for i in range(0, N):
#         if (arr[i] == target):
#             return i
#     return -1
def linearSearch(arr, N, target,counter):
    if counter < N:
        if (arr[counter] == target):
            return counter
        return linearSearch(arr, N, target, counter+1)
    return -1
arr = [2, 3, 4, 10, 40]
target = 10
N = len(arr)
result = linearSearch(arr, N, target,0)
if(result == -1):
    print("Element is not present in array")
else:
    print("Element is present at index", result)
