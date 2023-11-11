def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j]>arr[j+1]:swap(arr,j,j+1)
    return arr



def swap(arr, i, j):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp


test_arr = [1, 6, 7, 3, 2, 5, 7, 9, 44, 11, 55, 88, 3, 6]

result = bubble_sort(test_arr)
print(result)