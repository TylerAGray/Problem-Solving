function findRotationCount(arr, low = 0, high = arr.length - 1) {
    // If the array is not rotated at all, return 0
    if (high < low) return 0;
    
    // If there is only one element left, return its index (rotation count)
    if (high === low) return low;
    
    // Calculate the middle index
    let mid = Math.floor((low + high) / 2);
    
    // Check if the element at (mid + 1) is the minimum element (rotation point)
    // This condition handles cases like [3, 4, 5, 1, 2]
    if (mid < high && arr[mid + 1] < arr[mid]) {
      return mid + 1;
    }
    
    // Check if the mid element itself is the minimum element (rotation point)
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
    
    // Determine whether to search in the left half or the right half
    // If the element at mid is less than the element at high, the minimum element is in the left half
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
    
    // Otherwise, the minimum element is in the right half
    return findRotationCount(arr, mid + 1, high);
  }
  
  module.exports = findRotationCount;
  
  