def selection_sort(arr):
    for i in range(len(arr)-1):
        min = i
        for j in range(i+1,len(arr)):
            if arr[j]<arr[min]:min=j

        swap(arr,i,min)
    return arr
        


def swap(arr, i, j):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp


test_arr = [1, 6, 7, 3, 2, 5, 7, 9, 44, 11, 55, 88, 3, 6]

result = selection_sort(test_arr)
print(result)