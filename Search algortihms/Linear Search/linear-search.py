def linear_search(arr,ele):
    for i in range(len(arr)):
        if arr[i] == ele:return i
    return -1

test_arr = [7,5,3,1,8,0,11,23]
result = linear_search(test_arr,233)
print(result)