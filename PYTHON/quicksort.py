def quickSort(arr):
    if len(arr) <= 1:
        return arr

arr = [12,15,85,1,2,4,6,7,8,9,10,11,55]
pivot = arr[len(arr) // 2]
left = [x for x in arr if x < pivot]
middle = [x for x in arr if x == pivot]
right = [x for x in arr if x > pivot]
quickSort(left) + middle + quickSort(right)