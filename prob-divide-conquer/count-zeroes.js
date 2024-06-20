function countZeroes(arr) {
    // Find the index of the first 0 in the array
    let firstZero = findFirst(arr);
    // If there is no 0 in the array, return 0
    if (firstZero === -1) return 0;
  
    // The number of 0s is the total length of the array minus the index of the first 0
    return arr.length - firstZero;
  }
  
  function findFirst(arr, low = 0, high = arr.length - 1) {
    // Base condition to terminate recursion
    if (high >= low) {
      // Calculate the middle index
      let mid = low + Math.floor((high - low) / 2);
  
      // Check if the middle element is the first 0
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        // If the middle element is 1, search in the right half
        return findFirst(arr, mid + 1, high);
      } else {
        // If the middle element is 0, search in the left half
        return findFirst(arr, low, mid - 1);
      }
    }
    // If no 0 is found, return -1
    return -1;
  }
  
  module.exports = countZeroes;