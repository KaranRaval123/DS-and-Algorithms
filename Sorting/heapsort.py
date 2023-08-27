from heapq import heappop, heappush  
   
def heapsort(list1):  
    heap = []  
    for ele in list1:  
         heappush(heap, ele)  
    return heap 
   
list1 = [27, 21, 55, 15, 60, 1,2,3,4,5,4,2,1,2,4, 11, 17, 2, 87]  
print(heapsort(list1)) 