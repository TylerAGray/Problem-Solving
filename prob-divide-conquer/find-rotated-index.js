function findRotatedIndex(array, num) {
    // Find the index of the pivot where the array rotation happens
    var pivot = findPivot(array);
    
    // Determine which part of the array to perform the binary search on
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      // If num is within the range of the left part, search in the left part
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      // Otherwise, search in the right part
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  function binarySearch(array, num, start, end) {
    // If the array is empty, return -1 indicating num not found
    if (array.length === 0) return -1;
    // If num is out of the range of the specified segment, return -1
    if (num < array[start] || num > array[end]) return -1;
  
    // Perform binary search within the specified segment
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        // If num is found, return its index
        return mid;
      } else if (num < array[mid]) {
        // If num is smaller than mid element, search in the left half
        end = mid - 1;
      } else {
        // If num is larger than mid element, search in the right half
        start = mid + 1;
      }
    }
    // If num is not found, return -1
    return -1;
  }
  
  function findPivot(arr) {
    // If the array is not rotated or has only one element, return 0
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    
    var start = 0;
    var end = arr.length - 1;
    
    // Perform binary search to find the pivot
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      // Check if the mid element is the pivot (larger than the next element)
      if (arr[mid] > arr[mid + 1]) return mid + 1;
      else if (arr[start] <= arr[mid]) {
        // If the left half is sorted, search in the right half
        start = mid + 1;
      } else {
        // Otherwise, search in the left half
        end = mid - 1;
      }
    }
  }
  
  module.exports = findRotatedIndex;