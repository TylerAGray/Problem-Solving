function sortedFrequency(arr, num) {
    // Find the index of the first occurrence of num in the array
    let firstIdx = findFirst(arr, num);
    
    // If num is not present in the array, return -1
    if (firstIdx == -1) return firstIdx;
    
    // Find the index of the last occurrence of num in the array
    let lastIdx = findLast(arr, num);
    
    // Calculate and return the frequency of num in the array
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    // Perform binary search to find the first occurrence of num
    if (high >= low) {
      let mid = Math.floor((low + high) / 2);
      
      // Check if mid is the first occurrence of num
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        // If num is greater than mid element, search in the right half
        return findFirst(arr, num, mid + 1, high);
      } else {
        // If num is less than or equal to mid element, search in the left half
        return findFirst(arr, num, low, mid - 1);
      }
    }
    // If num is not found, return -1
    return -1;
  }
  
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    // Perform binary search to find the last occurrence of num
    if (high >= low) {
      let mid = Math.floor((low + high) / 2);
      
      // Check if mid is the last occurrence of num
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        // If num is less than mid element, search in the left half
        return findLast(arr, num, low, mid - 1);
      } else {
        // If num is greater than or equal to mid element, search in the right half
        return findLast(arr, num, mid + 1, high);
      }
    }
    // If num is not found, return -1
    return -1;
  }
  
  module.exports = sortedFrequency;