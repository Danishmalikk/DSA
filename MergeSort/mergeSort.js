// Function to merge two sorted subarrays into a single sorted array
function merge(arr, start, mid, end) {
    let leftSize = mid - start + 1;
    let rightSize = end - mid;

    let left = [];
    let right = [];

    // Copy elements into the left and right temporary arrays
    for (let i = 0; i < leftSize; i++) {
        left[i] = arr[start + i];
    }

    for (let i = 0; i < rightSize; i++) {
        right[i] = arr[mid + 1 + i];
    }

    let i = 0, j = 0, k = start;

    // Compare elements from the left and right subarrays and merge them
    while (i < leftSize && j < rightSize) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    // Copy remaining elements from the left subarray, if any
    while (i < leftSize) {
        arr[k++] = left[i++];
    }

    // Copy remaining elements from the right subarray, if any
    while (j < rightSize) {
        arr[k++] = right[j++];
    }
}

// Recursive function to divide the array and sort it
function mergeSort(arr, start, end) {
    // Base case: If the array has only one element, it is already sorted
    if (start >= end) {
        return;
    }

    // Find the middle index to divide the array
    let mid = start + Math.floor((end - start) / 2);

    // Recursively sort the left half
    mergeSort(arr, start, mid);

    // Recursively sort the right half
    mergeSort(arr, mid + 1, end);

    // Merge the two sorted halves
    merge(arr, start, mid, end);
}