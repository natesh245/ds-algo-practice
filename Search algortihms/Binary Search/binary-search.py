import math
def binary_search(arr,ele):
    left=0
    right=len(arr)-1
    while left<=right:
        mid = math.floor((left+right)/2)
        if ele == arr[mid]:return mid
        elif ele>arr[mid]:left =mid+1
        else : right = mid-1
    return -1



test_arr = [7,5,3,1,8,0,11,23]
test_arr.sort()
print(test_arr)
result = binary_search(test_arr,111)
print(result)
