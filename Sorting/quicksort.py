# Use quicksort when you are worried about space complexity and data is very large
# time complexity O(n^2) space complexity O(n log(n))
def QuickSort(list, start, end):
    if start<end:
        p = partition(list, start, end)
        QuickSort(list, start, p-1)
        QuickSort(list, p+1, end)

def partition(list, start, end):
    ptr = start
    pivot = end
    for i in range(start, end):
        if list[i] <= list[pivot]:
            list[ptr], list[i] = list[i], list[ptr]
            ptr+=1
    list[ptr], list[pivot] = list[pivot], list[ptr]
    return ptr

list = [38, 27,1,2,2,2,3,3, 43, 3, 9, 82, 10]
QuickSort(list, 0, len(list)-1)
print(list)