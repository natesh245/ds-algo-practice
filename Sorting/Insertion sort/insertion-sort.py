def insertion_sort(arr):
    for i in range(1,len(arr)):
        temp = arr [i]
        j = i-1
        while j>=0 and arr[j]>temp:
            arr[j+1]=arr[j]
            j=j-1
        arr[j+1]=temp
    return arr
        


def swap(arr, i, j):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp


test_arr = [1, 6, 7, 3, 2, 5, 7, 9, 44, 11, 55, 88, 3, 6]

result = insertion_sort(test_arr)
print(result)